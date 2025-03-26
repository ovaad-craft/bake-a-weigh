import {
  formatFiles,
  generateFiles,
  Tree,
  names,
  getProjects,
  ProjectConfiguration
} from '@nx/devkit';
import * as fs from 'fs';
import  ts = require('typescript');
import * as path from 'path';
import * as enquirer from 'enquirer';
import { AnnotationSpecs, ComponentInjectionPromptSchema, ComponentInjectionSpecs, InputPropDefinition, LineSelector, OvaadFormControlType, ParentComponentPrepSchema, ParentComponentSchema, PromptOptions, PromptSchema, OvaadAngularComponentGeneratorSchema as Schema, ShapeInputResponse } from './schema';
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

function createElementTag( prefix : string, name : string, selfClosing : boolean, inputs? : InputConnection[] ) : string {

  return `<${prefix}-${ name } ${ inputs ? inputs.map(a => createInputConnection( a ) ).join(' ') : '' }${ selfClosing ? ' />' : ` ></${ name }>`}`;

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

      const splitProps : string[] = a[ 0 ].split(' ');

      splitProps.forEach( b => {

        const prop : string[] = b.split( ':' );

        definitions.push( { name : prop[ 0 ], type : prop[ 1 ] } );

      });

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

  //  Fetch the target project to add component to.
  const projects       = getProjects( tree );
  const targetProject  = projects.get( options.project );

  //  Make sure project exist before continuing and stop process if not.
  if ( !targetProject ) { throw new Error( `Project "${ options.project }" not found.` ); }

  const promptResponses : Partial<PromptOptions> = {

    name     : options.name,
    project  : options.project,
    location : options.location,
    componentType : options.componentType

  };

  const addAnnotationSpecs = ( annotation : AnnotationSpecs ) : void => {

    const newAnnotationList : AnnotationSpecs[] = [];
    let addedToExistingItem  = false;

    if ( !promptResponses.annotationSpecs ) { promptResponses.annotationSpecs = [ annotation ]; }

    else {

      promptResponses.annotationSpecs.forEach( a => {


        if ( a && a.path === annotation.path ) {
          
          a.items.push( ...annotation.items );
          newAnnotationList.push( a );
          addedToExistingItem = true;

        }
        else { newAnnotationList.push( a! ) }


      });

    }

    if ( !addedToExistingItem ) { newAnnotationList.push( annotation ); }

  }




  //  Prompt options that load after entering the name of the component and the type of component
  //  you want to generate.



  //  Prompts for generating standard component.
  if ( options.componentType === 'standard' ) {

    //const responses : PromptSchema = options;


    
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
        //promptResponses.annotationSpecs = [ ...processInputResponses.annotations ];
        processInputResponses.annotations.forEach( a => addAnnotationSpecs( a ) );

      }

    }





    
    
    const insertComponent = insertionResponses.insertToggle;
    /*let parentComponentClassName : string;
    let insertionPoint : LineSelector;*/

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

      else {

        //  Determine line to insert new component on if user chooses not to replace code.
        const response = await enquirer.prompt< { line : number } >([

          {
            type    : 'number',
            name    : 'line',
            message : 'What line would you like to insert your component on?\n'
          }

        ]);

        promptResponses.insertionSpecs.templateInsertionPoint = { start : response.line };

      }

      /*if( promptResponses.insertionSpecs.parentComponentClassName !== undefined ) {


        responses.insertionSpecs = {

          parentComponentClassName : parentComponentClassName,
          templateInsertionPoint   : insertionPoint

        }; 

      }*/



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



    const importResponse = await enquirer.prompt< { globalTypePath : string } > ([

      {
        type    : 'input',
        name    : 'globalTypePath',
        message : 'Do you have a global import path for your types/interfaces?  If so enter it below, if not leave blank and continue.\n'
      }

    ]);



    if( importResponse.globalTypePath && importResponse.globalTypePath !== '' ) {

      if ( !promptResponses.inputSpecs ) {

        promptResponses.inputSpecs = { annotationImportPath : importResponse.globalTypePath };
      }
      else {

        promptResponses.inputSpecs.annotationImportPath = importResponse.globalTypePath;

      }


    }



    options = { ...promptResponses as PromptSchema };

  }



  //  Prompts for generating custom form control.
  if ( options.componentType === 'custom form control' ) {



    //let responses! : PromptSchema;



    const response = await enquirer.prompt< { controlType : OvaadFormControlType, typeAnnotation : string[], globalTypePath : string } >([

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
      },
      /*{
        type    : 'input',
        name    : 'globalTypePath',
        message : 'Do you have a globally registered path for your types/interfaces?  If not leave blank and continue.'
      }*/

    ]);

    if ( !promptResponses.customControlSpecs ) {

      const newAnnotation : ShapeInputResponse = shapeInputData( response.typeAnnotation );

      promptResponses.customControlSpecs = {

        controlType    : response.controlType,
        typeAnnotation : response.typeAnnotation,
        annotationImportPath : response.globalTypePath ? response.globalTypePath : undefined
        
      }
      //console.log(`typePath : '${response.globalTypePath}'`);

    }

    else {

      promptResponses.customControlSpecs.controlType    = response.controlType;
      promptResponses.customControlSpecs.typeAnnotation = response.typeAnnotation;
      promptResponses.customControlSpecs.annotationImportPath = ( response.globalTypePath ? response.globalTypePath : undefined );

    }




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
          message : 'What is the type annotation of this item?\n'
        }

      ]);

      if ( !promptResponses.customControlSpecs.formArraySpecs ) {

        promptResponses.customControlSpecs.formArraySpecs = {

          propertyName : response.listPropertyName,
          controlType  : response.listItemType,
          controlTypeAnnotation : response.listItemAnnotation

        };

      }

      else {

        promptResponses.customControlSpecs.formArraySpecs.propertyName = response.listPropertyName;
        promptResponses.customControlSpecs.formArraySpecs.controlType  = response.listItemType;
        promptResponses.customControlSpecs.formArraySpecs.controlTypeAnnotation = response.listItemAnnotation;

      }

      
    }



    if( promptResponses.customControlSpecs.controlType === 'FormArrayGroup' && promptResponses.customControlSpecs.annotationImportPath !== undefined ) {

      const response = await enquirer.prompt< { isListItemTypeImportGlobal : boolean } >([

        {
          type    : 'confirm',
          name    : 'isListItemTypeImportGlobal',
          message : 'Is the type/interface for this item imported from your global path?\n'
        }

      ]);
  
      if ( !response.isListItemTypeImportGlobal ) {

        const response = await enquirer.prompt< { listItemTypeImport : string } > ([

          {
            type    : 'input',
            name    : 'listItemTypeImport',
            message : 'Is there another path you want to enter?  If not leave blank and continue.\n'
          }

        ]);

        promptResponses.customControlSpecs.formArraySpecs.annotationImportPath = ( response.listItemTypeImport !== '' ? response.listItemTypeImport : undefined );

      }

      else { promptResponses.customControlSpecs.formArraySpecs.annotationImportPath = promptResponses.customControlSpecs.annotationImportPath; }
  
    }

    const inputResponses = await enquirer.prompt< { addInputs : string[] } > ([

      {
        type    : "list",
        name    : 'addInputs',
        message : "Would you like to add Inputs to this component? If so list them along with their types and locations as in the following examples.\n\n primative types example: YourInputName01:string, YourInputName02:number\n\n custom types example ; YourInputName01:CustomType01 YourInputName02:CustomType02|path/to/types01, YourInputName03:CustomType03|path/to/types02\n\nmixture example : YourInputName01:string, YourInputName02:number, YourInputName03:CustomType01 YourInputName04:CustomType02|path/to/types\n",
      },
    ]);



    if ( inputResponses.addInputs.length > 0 ) {

      const inputData : ShapeInputResponse = shapeInputData( inputResponses.addInputs );



      if ( ! promptResponses.inputSpecs ) {

        promptResponses.inputSpecs = { declarations : [ ...inputData.definitions ] };

      }

      else {

        promptResponses.inputSpecs.declarations = [ ...inputData.definitions ];

      }

      inputData.annotations.forEach( a => addAnnotationSpecs( a ) );


    }




    const insertionResponse = await enquirer.prompt< { componentClassName : string } >([

      {
        type    : 'input',
        name    : 'componentClassName',
        message : `Would you like to immediately import this new component into another component?\nIf so enter the component's class name below, if not leave blank and continue.\n\ncorrect : item-name, incorrect: ItemNameComponent\n`
      }

    ]);

    //console.log(insertionResponse.componentClassName );

    if ( insertionResponse.componentClassName !== undefined && insertionResponse.componentClassName !== '' ) {

      //console.log(insertionResponse.componentClassName)

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

        //console.log(promptResponses)

      }

      else {

        promptResponses.insertionSpecs.parentComponentClassName = insertionResponse.componentClassName;
        promptResponses.insertionSpecs.templateInsertionPoint = {

          start : response.replaceCode[ 0 ],
          end   : response.replaceCode[ 1 ] ?? undefined

        };

        console.log(promptResponses)

      }




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



  

  //console.log(options.componentType);

  if ( options.componentType === 'custom form control' ) {

    //console.log(options);



    if( options.customControlSpecs && options.customControlSpecs.controlType ) {
      
      
      if( options.customControlSpecs.controlType === 'FormGroup' || options.customControlSpecs.controlType === 'FormArrayGroup' ) {
        
        //console.log(`control type condition : ${options.customControlSpecs.controlType}`);
        const moduleImports : string[] = [ 'ReactiveFormsModule', 'FormGroup' ];



        if( options.customControlSpecs.formArraySpecs && options.customControlSpecs.formArraySpecs.controlType === 'FormControl' ) { moduleImports.push( 'FormControl' ); }
  
        importList.push( createImportScript( moduleImports, '@angular/forms' ) );
        metaDataImports.push( 'ReactiveFormsModule' );
        
      }

      if( options.customControlSpecs.controlType === 'FormControl' ) {
  
        importList.push( createImportScript( [ 'FormsModule', 'FormControl' ], '@angular/forms' ) );
        metaDataImports.push( 'FormsModule' );
  
      }

      inputList.push( createControlInput( options.customControlSpecs.controlType === 'FormArrayGroup' ? 'FormGroup' : options.customControlSpecs.controlType, options.customControlSpecs.typeAnnotation ) );

      //console.log(`control input : ${createControlInput( options.customControlSpecs!.controlType === 'FormArrayGroup' ? 'FormGroup' : options.customControlSpecs!.controlType, options.customControlSpecs!.typeAnnotation )}`)
    }





    if( options.customControlSpecs?.annotationImportPath ) {

      const importIdentifiers : string[] = [ options.customControlSpecs.typeAnnotation ];

      

      if(

        options.customControlSpecs.formArraySpecs &&
        options.customControlSpecs.formArraySpecs.annotationImportPath &&
        options.customControlSpecs.formArraySpecs.annotationImportPath ===
        options.customControlSpecs.annotationImportPath

      ){ importIdentifiers.push( options.customControlSpecs.formArraySpecs.controlTypeAnnotation ); }



      importList.push( createImportScript( importIdentifiers, options.customControlSpecs.annotationImportPath ) );

    }


    else {



      if( options.customControlSpecs?.formArraySpecs?.annotationImportPath ) {

        importList.push( createImportScript(

          [ options.customControlSpecs.formArraySpecs.controlTypeAnnotation ],
          options.customControlSpecs.formArraySpecs.annotationImportPath

        ));

      }



    }




    /*if ( options.customControlSpecs?.annotationImportPath === options.customControlSpecs?.formArraySpecs?.annotationImportPath ) {

      const importIdentifiers : string[] = [ options.customControlSpecs!.annotationImportPath!, options.customControlSpecs!.formArraySpecs!.annotationImportPath! ];

      importIdentifiers.push( options.customControlSpecs!.formArraySpecs!.annotationImportPath! )

      const importStatement = createImportScript( importIdentifiers, options.customControlSpecs!.annotationImportPath! );

    }*/
    

    /*if( options.hasGlobalTypePath === 'yes' && options.globalTypePath ) {

      const importItems : string[] = [ `${options.typeAnnotation}` ];

      if( options.isListItemTypeGlobal === 'yes' && options.listItemType ){
        importItems.push(options.listItemAnnotation!);
      }

      importList.push( createImportScript( [ ...importItems ], options.globalTypePath ) );

    }*/

    /*if( options.isListItemTypeGlobal === 'no' && options.listItemTypeImport ){

      importList.push( createImportScript( [ `${options.listItemType}` ], options.listItemTypeImport ) );

    }*/


  }



  if( options.inputSpecs ){

    const annotations : string[] = [];

    options.inputSpecs.declarations.forEach( a => {
      
      const prop : string[] = a.split( ':' );

      if(

        prop[ 1 ] !== 'string'  &&
        prop[ 1 ] !== 'number'  &&
        prop[ 1 ] !== 'boolean' &&
        prop[ 1 ] !== 'object'  &&
        prop[ 1 ] !== 'array'

      ){ annotations.push( prop[ 1 ] ); }
      
      inputList.push( createStandardInput( a.split( ':' )[ 0 ], a.split( ':' )[ 1 ] ) );

    });
    
    importList.push( createImportScript( annotations, options.inputSpecs.annotationImportPath!) );

  }




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

  console.log(componentOptions);

  
  
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    targetPath,
    { ...componentOptions,  tmpl : '' }
  );
  
  await formatFiles( tree );



  if ( options.insertionSpecs !== undefined ) {
    
    let   parentComponentData   : ParentComponentPrepSchema;
    const parentComponentWriter : OvaadFileWriter = new OvaadFileWriter();

    const bindings : InputConnection[] = [];



    parentComponentWriter.setProject( targetProject );



    const parentPath : string | undefined = parentComponentWriter.findComponentFile( options.insertionSpecs.parentComponentClassName );

    //console.log(options.insertionSpecs.parentComponentClassName);
    //console.log(parentPath);
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
      childComponentTag  : createElementTag( targetProject.prefix, componentNames.name, true, bindings ),
      insertionPoint     : options.insertionSpecs.templateInsertionPoint
      
    };

    //console.log(parentComponentData);



    parentComponentWriter.setInsertionData( parentComponentData );
    const updatedProject = parentComponentWriter.addNewComponentToComponent();

    //console.log( updatedProject );
    if( updatedProject !== undefined ){

      fs.writeFileSync(updatedProject.componentPath, updatedProject.newComponentFile, 'utf-8' );
      fs.writeFileSync(updatedProject.templatePath, updatedProject.newTemplateFile.join('\n'),  'utf-8' );

    }



  }



  /*if( options.insertionSpecs !== undefined ) {

    //const parentComponent = new OvaadFileWriter( targetProject, parentComponentData );
    //console.log(parentComponent);
    const updatedProject = parentComponent.addNewComponentToComponent( options.insertInto! );

    //console.log(updatedProject);
    //const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

    //const updatedComponentCode = printer.printFile( updatedProject!.newComponentFile! );
    //const updatedTemplateCode = printer.printFile( updatedProject!.newTemplateFile!.join('\n') );
    const updatedTemplateCode = updatedProject!.newTemplateFile!.join('\n');


    //fs.writeFileSync(updatedProject!.componentPath, updatedProject!.newComponentFile!, 'utf-8' );
    //fs.writeFileSync(updatedProject!.templatePath, updatedTemplateCode,  'utf-8' );

  }*/

}

export default ovaadAngularComponentGenerator;