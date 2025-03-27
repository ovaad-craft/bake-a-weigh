import {
  formatFiles,
  generateFiles,
  Tree,
  names,
  getProjects
} from '@nx/devkit';
import * as fs from 'fs';
import * as path from 'path';
import * as enquirer from 'enquirer';
import {
  AnnotationSpecs, ComponentInjectionSpecs, InputPropDefinition, OvaadFormControlType,
  ParentComponentPrepSchema, PromptOptions, PromptSchema, ShapeInputResponse
} from './schema';
import { OvaadFileWriter } from './file-writer/file-writer';







function createImportScript( items : string[], location : string ) : string {
  
  return `import { ${ items.length > 1 ? items.join(', ') : items[ 0 ] } } from '${ location }';`;

}

function createPropAnnotation( item : string, annotation : string ) : string {

  return `${ item }< ${ annotation } >`;

}

function createStandardInput( name : string, annotation : string, defaultVal? : string ) : string {

  return `@Input() ${ name }${ !defaultVal ? '!' : '' } : ${ annotation }${ defaultVal ? ` = ${ defaultVal }` : '' };`;

}

function createControlInput( item : string, annotation: string ) : string {

  return `@Input() Control! : ${ createPropAnnotation( item, (item === 'FormControl' ? `${annotation} | null` : annotation ) ) };`;

}

interface InputConnection { name : string; value : string; }

function createInputConnection( inputData : InputConnection ) : string {

  return `[${ inputData.name }]="${ inputData.value }"`;

}

function createElementTag( prefix : string, name : string, selfClosing : boolean, control : boolean, inputs? : InputConnection[] ) : string {

  return `<${prefix}-${ name } ${ control ? 'ngDefaultControl' : '' } ${ inputs ? inputs.map(a => createInputConnection( a ) ).join(' ') : '' }${ selfClosing ? ' />' : ` ></${ name }>`}`;

}

function shapeInputData( data : string[] ) : ShapeInputResponse {

  const annotations : AnnotationSpecs[]     = [];
  const definitions : InputPropDefinition[] = [];

  data.forEach( a => {

    const hasImport : boolean = a.includes( '|' );

    if( hasImport ){

      const splitFromAnnotation : string[] = a.split( '|' );
      const splitProps : string[] = splitFromAnnotation[ 0 ].split(' ');

      const annotationList : string[] = [];

      splitProps.forEach( b => {

        const prop : string[] = b.split( ':' );

        definitions.push( { name : prop[ 0 ], type : prop[ 1 ] } );
        annotationList.push( prop[ 1 ] );

      });

      annotations.push({

        path : splitFromAnnotation[ 1 ],
        items : [ ...annotationList ]

      });


    }

    else {

      const splitProp : string[] = a.split( ':' );
      //console.log(splitProp);

      definitions.push( { name : splitProp[ 0 ], type : splitProp[ 1 ] } );

    }

  });

  return { annotations, definitions };

}





export interface OvaadComponentOptions {

  importList?     : string[];
  metaDataImports : string[];
  propList        : string[];

}


export type CustomControlType = "FormGroup" | "FormControl" | "FormArrayGroup";

export interface CustomControlOptions {

  controlType       : CustomControlType;
  typeAnnotation    : string;
  hasGlobalTypePath : boolean;

}





export async function ovaadAngularComponentGenerator( tree : Tree, options : PromptSchema ) {

  //  Fetch the target project to add new component to.
  const projects       = getProjects( tree );
  const targetProject  = projects.get( options.project );



  //  Make sure project exist before continuing.
  if ( !targetProject ) { throw new Error( `Project "${ options.project }" not found.` ); }





  

  //  For storing user's prompt responses asynchronously.
  const promptResponses : Partial<PromptOptions> = {

    name     : options.name,
    project  : options.project,
    location : options.location,
    componentType : options.componentType

  };







  //  Organizes and updates data for generating import declarations.
  const addAnnotationSpecs = ( annotation : AnnotationSpecs ) : void => {

    const newAnnotationList : AnnotationSpecs[] = [];
    let addedToExistingItem  = false;

    if ( !promptResponses.annotationSpecs ) { promptResponses.annotationSpecs = [ annotation ]; }

    else {

      promptResponses.annotationSpecs.forEach( a => {

        if ( a ) {

          if ( a.path === annotation.path ) {
            
            a.items.push( ...annotation.items );
            newAnnotationList.push( a );
            addedToExistingItem = true;
  
          }
          else { newAnnotationList.push( a ) }

        }

      });

      promptResponses.annotationSpecs = [ ...newAnnotationList ];

    }

    if ( !addedToExistingItem ) {
      
      newAnnotationList.push( annotation );
      promptResponses.annotationSpecs = [ ...newAnnotationList ];

    }

  }




  
  
  
  //  Prompt options that load after providing name, project, componentType
  //  and location.



  //  Prompts for generating standard component.
  if ( options.componentType === 'standard' ) {


    
    //  Determine if component should have any inputs and whether it should be immediately
    //  imported into another component. 
    const insertionResponses = await enquirer.prompt< { addInputs : string[], insertToggle : boolean, insertInto : ComponentInjectionSpecs } >([

      {
        type    : "list",
        name    : 'addInputs',
        message : "Would you like to add Inputs to this component? If so list them along with their types and locations as in the following examples.\n\n primative types example: YourInputName01:string, YourInputName02:number\n\n custom types example ; YourInputName01:CustomType01 YourInputName02:CustomType02|path/to/types01, YourInputName03:CustomType03|path/to/types02\n\nmixture example : YourInputName01:string, YourInputName02:number, YourInputName03:CustomType01 YourInputName04:CustomType02|path/to/types\n",
      },
      {
        type    : 'confirm',
        name    : 'insertToggle',
        message : 'Would you like to immediately import this new component into an existing component?\n'
      }

    ]);

    if ( insertionResponses.addInputs.length > 0 ) {
      
      if( !promptResponses.inputSpecs ) {

        const processInputResponses : ShapeInputResponse = shapeInputData( insertionResponses.addInputs );


        
        promptResponses.inputSpecs      = { declarations : [ ...processInputResponses.definitions ] };
        processInputResponses.annotations.forEach( a => addAnnotationSpecs( a ) );

      }

    }





    
    
    const insertComponent = insertionResponses.insertToggle;

    //  If user chooses to immediately import the new component into an existing component.
    if( insertComponent ) {

      
      //  Get name of component to insert new component into and destermine if an HTML element
      //  should be replaced by the new component.
      const response = await enquirer.prompt< { componentClassName : string, replaceCode : boolean } >([

        {
          type    : "input",
          name    : "componentClassName",
          message : 'What is the name of this component?\ncorrect : item-name, incorrect: ItemNameComponent\n'
        },
        {
          type    : 'confirm',
          name    : 'replaceCode',
          message : 'Would you like this element to replace something in your HTML?\n'
        }
        
      ]);



      if( !promptResponses.insertionSpecs ) {
        
        promptResponses.insertionSpecs = { parentComponentClassName : response.componentClassName };

      }






      
      //  Determine the lines of code to replace if user chooses to replace code.
      if ( response.replaceCode ) {

        const response = await enquirer.prompt< { lines : number[] } >([

          {
            type : 'list',
            name : 'lines',
            message : 'Enter the first and last lines of code you want to replace separate by a comma.\nexample: 8, 23\n'
          }

        ]);

        promptResponses.insertionSpecs.templateInsertionPoint = { start : response.lines[ 0 ], end : response.lines[ 1 ] };

      }

      //  Determine line to insert new component on if user chooses not to replace code.
      else {

        const response = await enquirer.prompt< { line : number } >([

          {
            type    : 'number',
            name    : 'line',
            message : 'What line would you like to insert your component on?\n'
          }

        ]);

        promptResponses.insertionSpecs.templateInsertionPoint = { start : response.line };

      }







      //  Check if user would immediately like to pass data into their
      //  new component's inputs.
      if (

        promptResponses &&
        promptResponses.inputSpecs &&
        promptResponses.inputSpecs.declarations &&
        promptResponses.inputSpecs.declarations.length > 0

      ) {

        const response = await enquirer.prompt< { connectInputs : string[] } > ([

          {
            type    : 'list',
            name    : 'connectInputs',
            message : 'Would you like to immediately pass data into your inputs?  If so make a comma separated list in the following format.\nYourInput:YourData.propA, AnotherInput:YourData.propB\n'
          }

        ]);

        promptResponses.inputSpecs.bindings = ( response.connectInputs.length > 0 ? [ ...response.connectInputs ] : undefined );

      }

    }



    options = { ...promptResponses as PromptSchema };

  }







  //  Prompts for generating custom form control.
  if ( options.componentType === 'custom form control' ) {



    //  Determine the kind of form control the user wants to create along with the type annotation.
    const response = await enquirer.prompt< { controlType : OvaadFormControlType, typeAnnotation : string, globalTypePath : string } >([

      {
        type    : 'select',
        name    : 'controlType',
        message : 'What type of control will this be?',
        choices : [ 'FormGroup', 'FormControl', 'FormArrayGroup' ],
      },
      {
        type    : 'input',
        name    : 'typeAnnotation',
        message : `Enter the type annotation of your control followed by a "|" and the location of your type. If it's a primative type that doesn't need to be imported just add the type.\n\nimport example : YourType|path/to/location\n\nno import example : string\n`,
      }

    ]);

    if ( !promptResponses.customControlSpecs ) {

      

      const newAnnotation : string[] = response.typeAnnotation.split('|');

      promptResponses.customControlSpecs = {

        controlType    : response.controlType,
        typeAnnotation : newAnnotation[ 0 ],
        annotationImportPath : response.globalTypePath ? response.globalTypePath : undefined
        
      }

      addAnnotationSpecs( { items : [ newAnnotation[ 0 ] ], path : newAnnotation[ 1 ] } );
      

    }

    else {

      promptResponses.customControlSpecs.controlType    = response.controlType;
      promptResponses.customControlSpecs.typeAnnotation = response.typeAnnotation;
      promptResponses.customControlSpecs.annotationImportPath = ( response.globalTypePath ? response.globalTypePath : undefined );

    }




    //  Determine the kind of form control the user wants to iterate if they choose to create
    //  a FormArrayGroup.
    if ( promptResponses.customControlSpecs.controlType === 'FormArrayGroup' ) {

      const response = await enquirer.prompt< { listPropertyName : string, listItemType : OvaadFormControlType, listItemAnnotation : string } > ([

        {
          type    : 'input',
          name    : 'listPropertyName',
          message : 'What is the name of your FormArray control?\n',
        },
        {
          type    : 'select',
          name    : 'listItemType',
          message : 'What type of item will the FormArray iterate?',
          choices : [ 'FormControl', 'FormGroup', 'FormArrayGroup' ]
        },
        {
          type    : 'input',
          name    : 'listItemAnnotation',
          message : `Enter the type annotation for this item followed by a "|" and the location of your type. If it's a primative type that doesn't need to be imported just add the type.\n\nimport example : YourType|path/to/location\n\nprimative example : string\n`
        }

      ]);
      
      const annotationResponse : string[]        = response.listItemAnnotation.split( '|' );
      const newAnnotationData  : AnnotationSpecs = { items : [ annotationResponse[ 0 ] ], path : annotationResponse[ 1 ] };



      if ( !promptResponses.customControlSpecs.formArraySpecs ) {
        
        const pathCheck : boolean = response.listItemAnnotation.includes( '|' );
        let selectedType! : string;
        
        if ( pathCheck ){
          
          addAnnotationSpecs( newAnnotationData );
          selectedType = annotationResponse[ 0 ];
        
        }
        
        promptResponses.customControlSpecs.formArraySpecs = {
          
          propertyName : response.listPropertyName,
          controlType  : response.listItemType,
          controlTypeAnnotation : pathCheck ? selectedType : response.listItemAnnotation
        
        };
      
      }
      
      
      else {
        
        const pathCheck : boolean = response.listItemAnnotation.includes( '|' );
        let selectedType! : string;
        
        if ( pathCheck ){
          
          addAnnotationSpecs( newAnnotationData );
          selectedType = annotationResponse[ 1 ];
        
        }
        
        promptResponses.customControlSpecs.formArraySpecs.propertyName = response.listPropertyName;
        promptResponses.customControlSpecs.formArraySpecs.controlType  = response.listItemType;
        promptResponses.customControlSpecs.formArraySpecs.controlTypeAnnotation = pathCheck ? selectedType : response.listItemAnnotation;
  
      }





      
    }



    
    //  Determine if the user would like to add additional inputs to the new component.
    const inputResponses = await enquirer.prompt< { addInputs : string[] } > ([

      {
        type    : "list",
        name    : 'addInputs',
        message : "Would you like to add Inputs to this component? If so list them along with their types and locations as in the following examples.\n\n primative types example: YourInputName01:string, YourInputName02:number\n\n custom types example ; YourInputName01:CustomType01 YourInputName02:CustomType02|path/to/types01, YourInputName03:CustomType03|path/to/types02\n\nmixture example : YourInputName01:string, YourInputName02:number, YourInputName03:CustomType01 YourInputName04:CustomType02|path/to/types\n",
      },
    ]);



    if ( inputResponses.addInputs.length > 0 ) {

      const inputData : ShapeInputResponse = shapeInputData( inputResponses.addInputs );



      if ( !promptResponses.inputSpecs ) {

        promptResponses.inputSpecs = { declarations : [ ...inputData.definitions ] };
        
      }

      else {

        promptResponses.inputSpecs.declarations = [ ...inputData.definitions ];

      }

      inputData.annotations.forEach( a => addAnnotationSpecs( a ) );


    }




    //  Determine if the user would like to immediately import the new component into an
    //  existing component.
    const insertionResponse = await enquirer.prompt< { componentClassName : string } >([

      {
        type    : 'input',
        name    : 'componentClassName',
        message : `Would you like to immediately import this new component into another component?\nIf so enter the component's class name below, if not leave blank and continue.\n\ncorrect : item-name, incorrect: ItemNameComponent\n`
      }

    ]);
    

    if ( insertionResponse.componentClassName !== undefined && insertionResponse.componentClassName !== '' ) {

      

      //  Determine if the user would like the new component to replace an element
      //  in the template or be added on a specific line.
      const response = await enquirer.prompt< { replaceCode : number[] } > ([

        {
          type : 'list',
          name: 'replaceCode',
          message : `Would you like your new component to replace anything in the parent component's HTML?\nIf so enter the start and end lines below separated by a comma. If not, enter the line you want to insert your component\nreplacement example: 4,17\ninsert example: 4\n`
        }
      ]);

      if ( !promptResponses.insertionSpecs ){

        promptResponses.insertionSpecs = {
          
          parentComponentClassName : insertionResponse.componentClassName,
          templateInsertionPoint   : {

            start : response.replaceCode[ 0 ],
            end   : response.replaceCode[ 1 ] ?? undefined

          }
          
        };
        
      }

      else {

        promptResponses.insertionSpecs.parentComponentClassName = insertionResponse.componentClassName;
        promptResponses.insertionSpecs.templateInsertionPoint = {

          start : response.replaceCode[ 0 ],
          end   : response.replaceCode[ 1 ] ?? undefined

        };

      }




      //  Determine if the user would like to immediately pass data into their
      //  new component's inputs.
      if (

        promptResponses.inputSpecs &&
        promptResponses.inputSpecs.declarations &&
        promptResponses.inputSpecs.declarations.length > 0

      ) {

        const response = await enquirer.prompt< { connectInputs : string[] } > ([
  
          {
            type    : 'list',
            name    : 'connectInputs',
            message : 'Would you like to immediately pass data into your inputs?  If so make a comma separated list in the following format.\nYourInput:YourData.propA, AnotherInput:YourData.propB\n'
          }
  
        ]);



        if ( !promptResponses.inputSpecs ) {

          promptResponses.inputSpecs = { bindings :  response.connectInputs.length > 0 ? [ ...response.connectInputs ] : undefined };

        }

        else {

          promptResponses.inputSpecs.bindings = response.connectInputs.length > 0 ? [ ...response.connectInputs ] : undefined;

        }  
  
      }

    }
    
    options = { ...promptResponses as PromptSchema };

  }
  
    
  
  
  
  
  
  //  For preparing data to use in __tmpl__ files.
  const componentNames  = names( options.name );
  const targetPath      = path.join( targetProject.root, options.location, componentNames.fileName );
  const importList      : string[] = [];
  const metaDataImports : string[] = [];
  const propList        : string[] = [];
  const inputList       : string[] = [];
  
  
  
  
  
  //  Proccess data into elements needed to generate contents of
  //  custom form control.
  if ( options.componentType === 'custom form control' ) {



    if( options.customControlSpecs && options.customControlSpecs.controlType ) {
      
      
      //  Handle if user opts to create a FormGroup or FormArrayGroup.
      if( options.customControlSpecs.controlType === 'FormGroup' || options.customControlSpecs.controlType === 'FormArrayGroup' ) {
                


        //  For items to import from @angular/forms.
        const moduleImports : string[] = [ 'ReactiveFormsModule', 'FormGroup' ];



        //  If user creates a FormArrayGroup and wants it to iterate a FormControl, add FormControl to
        //  module imports.
        if( options.customControlSpecs.formArraySpecs && options.customControlSpecs.formArraySpecs.controlType === 'FormControl' ) {
          
          moduleImports.push( 'FormControl' );

        }
  
        importList.push( createImportScript( moduleImports, '@angular/forms' ) );
        metaDataImports.push( 'ReactiveFormsModule' );
        
      }

      

      //  Handle if user opts to create a FormControl.
      if( options.customControlSpecs.controlType === 'FormControl' ) {
  
        importList.push( createImportScript( [ 'FormsModule', 'FormControl' ], '@angular/forms' ) );
        metaDataImports.push( 'FormsModule' );
  
      }

      inputList.push( createControlInput( options.customControlSpecs.controlType === 'FormArrayGroup' ? 'FormGroup' : options.customControlSpecs.controlType, options.customControlSpecs.typeAnnotation ) );
      inputList.push( createStandardInput( 'Label', 'string' ) );

    
    }

  }



  
  
  //  Generate import declarations for new component.
  if ( options.annotationSpecs ) {
    
    options.annotationSpecs.forEach( a => {

      importList.push( createImportScript( a.items, a.path ) );

    });

  }

  
  
  
  
  //  Generate @Inputs for the new component.
  if ( options.inputSpecs ) {

    options.inputSpecs.declarations.forEach( a => {
      
      inputList.push( createStandardInput( a.name, a.type ) );

    });

  }
  
  
  
  
  
  
  
  //  Data processed into content for __tmpl__ files.
  const componentOptions = {

    componentType      : options.componentType,
    controlType        : options.customControlSpecs?.controlType                           ?? undefined,
    listItemType       : options.customControlSpecs?.formArraySpecs?.controlType           ?? undefined,
    listPropertyName   : options.customControlSpecs?.formArraySpecs?.propertyName          ?? undefined,
    listItemAnnotation : options.customControlSpecs?.formArraySpecs?.controlTypeAnnotation ?? undefined,
    importList         : [ ...importList      ],
    metaDataImports    : [ ...metaDataImports ],
    inputList          : [ ...inputList       ],
    propList           : [ ...propList        ],
    projectPrefix      : targetProject.prefix,
    ...componentNames

  }

  
  
  //  Generate files for new component and save to project.
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    targetPath,
    { ...componentOptions,  tmpl : '' }
  );
  
  await formatFiles( tree );



  
  
  
  
  //  Handle if user opts to import their new component into
  //  an existing component.
  if ( options.insertionSpecs !== undefined ) {
    
    let   parentComponentData   : ParentComponentPrepSchema;
    const parentComponentWriter : OvaadFileWriter = new OvaadFileWriter();

    const bindings : InputConnection[] = [];



    parentComponentWriter.setProject( targetProject );



    const parentPath : string | undefined = parentComponentWriter.findComponentFile( options.insertionSpecs.parentComponentClassName );
    
    if( parentPath === undefined ) { throw new Error( `Path to ${ options.insertionSpecs.parentComponentClassName } not found. Line 956.` ); }



    const parentFileName : string = path.basename( parentPath );



    if ( options.inputSpecs && options.inputSpecs.bindings ) {

      options.inputSpecs.bindings.forEach( a => bindings.push( { name : a.split( ':' )[ 0 ], value : a.split( ':' )[ 1 ] } ) );

    }



    parentComponentData = {

      parentComponentClassName : options.insertionSpecs.parentComponentClassName,
      parentComponentFileName  : parentFileName,
      parentComponentPath      : parentPath,
      childComponentClassName  : `${componentNames.className}Component`,
      childComponentFileName   : componentNames.fileName,
      childComponentPath : `${ targetPath }/${ componentNames.fileName }.component`,
      childComponentTag  : createElementTag(

        targetProject.prefix,
        componentNames.name, true,
        ( options.componentType === 'standard' ? false : true ),
        bindings
        
      ),
      insertionPoint     : options.insertionSpecs.templateInsertionPoint
      
    };
    



    parentComponentWriter.setInsertionData( parentComponentData );


    const updatedProject = parentComponentWriter.addNewComponentToComponent();

    
    if( updatedProject !== undefined ){

      fs.writeFileSync(updatedProject.componentPath, updatedProject.newComponentFile, 'utf-8' );
      fs.writeFileSync(updatedProject.templatePath, updatedProject.newTemplateFile.join('\n'),  'utf-8' );

    }

  }

}

export default ovaadAngularComponentGenerator;