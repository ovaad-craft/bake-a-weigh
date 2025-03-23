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
import { ComponentInjectionSpecs, OvaadFormControlType, PromptSchema, OvaadAngularComponentGeneratorSchema as Schema } from './schema';
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

function createElementTag( name : string, selfClosing : boolean, inputs? : InputConnection[] ) : string {

  return `<${ name } ${ inputs ? inputs.map(a => createInputConnection(a)).join(' ') : '' }${ selfClosing ? ' />' : ` ></${ name }>`}`;

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



  //  Prompt options that load after entering the name of the component and the type of component
  //  you want to generate.



  //  Prompts for generating standard component.
  if ( options.componentType === 'standard' ) {

    const responses : PromptSchema = options;


    
    //  Determine if component should have any inputs and whether it should be immediately
    //  imported into another component. 
    const insertionResponses = await enquirer.prompt< { addInputs : string, insertToggle : boolean, insertInto : ComponentInjectionSpecs } >([

      {
        type    : "list",
        name    : 'addInputs',
        message : "Would you like to add Inputs to this component? list them along with their types as in the following example > YourInputName01:InputType01, YourInputName02:InputType02.",
      },
      {
        type    : 'confirm',
        name    : 'insertToggle',
        message : 'Would you like to immediately import this into a component?'
      }

    ]);

    if ( insertionResponses.addInputs.length > 0 ) {
      
      if( !responses.inputSpecs ) { responses.inputSpecs = { declarations : [ ...insertionResponses.addInputs ] }; }

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
          message : 'What is the class name of this component?'
        },
        {
          type    : 'confirm',
          name    : 'replaceCode',
          message : 'Would you like this element to replace something in your HTML?'
        }
        
      ]);

      responses.insertionSpecs!.parentComponentClassName = response.componentClassName;


      
      //  Determine the lines of code to replace if user chooses to replace code.
      if ( response.replaceCode ) {

        const response = await enquirer.prompt< { lines : number[] } >([

          {
            type : 'list',
            name : 'lines',
            message : 'Enter the first and last lines of code you want to replace separate by a comma. => example: 8, 23'
          }

        ]);

        responses.insertionSpecs!.templateInsertionPoint = { start : response.lines[ 0 ], end : response.lines[ 1 ] };
        //responses.insertInto!.insertAt   = response.lines[ 0 ];

      }

      else {

        //  Determine line to insert new component on if user chooses not to replace code.
        const response = await enquirer.prompt< { line : number } >([

          {
            type    : 'number',
            name    : 'line',
            message : 'What line would you like to insert your component on?'
          }

        ]);

        responses.insertionSpecs!.templateInsertionPoint.start = response.line;

      }



      if ( responses && responses.inputSpecs && responses.inputSpecs.declarations.length > 0 ) {

        const response = await enquirer.prompt< { connectInputs : string[] } > ([

          {
            type    : 'list',
            name    : 'connectInputs',
            message : 'Would you like to immediately pass data into your inputs?  If so make a comma separated list in the following format. => YourInput:YourData.propA, AnotherInput:YourData.propB'
          }

        ]);

        responses.inputSpecs.bindings = ( response.connectInputs.length > 0 ? [ ...response.connectInputs ] : undefined );

      }

    }



    const importResponse = await enquirer.prompt< { globalTypePath : string } > ([

      {
        type    : 'input',
        name    : 'globalTypePath',
        message : 'Do you have a global import path for your types/interfaces?  If so enter it below, if not leave blank and continue.'
      }

    ]);



    if( importResponse.globalTypePath && importResponse.globalTypePath !== '' ) {

      responses.inputSpecs!.annotationImportPath = importResponse.globalTypePath;

    }



    options = { ...responses };

  }



  //  Prompts for generating custom form control.
  if ( options.componentType === 'custom form control' ) {



    let responses! : PromptSchema;



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
        message : 'Enter the type annotation of your control. (Exclude outer brackets)',
      },
      {
        type    : 'input',
        name    : 'hasGlobalPath',
        message : 'Do you have a globally registered path for your types/interfaces?  If not leave blank and continue.'
      }

    ]);

    responses.customControlSpecs!.controlType    = response.controlType;
    responses.customControlSpecs!.typeAnnotation = response.typeAnnotation;
    responses.customControlSpecs!.annotationImportPath = ( response.globalTypePath !== '' ? response.globalTypePath : undefined );



    if ( responses.customControlSpecs!.controlType === 'FormArrayGroup' ) {

      const response = await enquirer.prompt< { listPropertyName : string, listItemType : OvaadFormControlType, listItemAnnotation : string } > ([

        {
          type    : 'input',
          name    : 'listPropertyName',
          message : 'What is the name of your FormArray control?',
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
          message : 'What is the type annotation of this item?'
        }

      ]);

      responses.customControlSpecs!.formArraySpecs!.propertyName          = response.listPropertyName;
      responses.customControlSpecs!.formArraySpecs!.controlType           = response.listItemType;
      responses.customControlSpecs!.formArraySpecs!.controlTypeAnnotation = response.listItemAnnotation;
      
    }



    if( responses.customControlSpecs!.controlType === 'FormArrayGroup' && responses.customControlSpecs!.annotationImportPath !== undefined ) {

      const response = await enquirer.prompt< { isListItemTypeImportGlobal : boolean } >([

        {
          type    : 'confirm',
          name    : 'isListItemTypeImportGlobal',
          message : 'Is the type/interface for this item imported from your global path?'
        }

      ]);
  
      if ( !response.isListItemTypeImportGlobal ) {

        const response = await enquirer.prompt< { listItemTypeImport : string } > ([

          {
            type    : 'input',
            name    : 'listItemTypeImport',
            message : 'Is there another path you want to enter?  If not leave blank and continue.'
          }

        ]);

        responses.customControlSpecs!.formArraySpecs!.annotationImportPath = ( response.listItemTypeImport !== '' ? response.listItemTypeImport : undefined );

      }

      else { responses.customControlSpecs!.formArraySpecs!.annotationImportPath = responses.customControlSpecs?.annotationImportPath; }
  
    }

    const inputResponses = await enquirer.prompt< { addInputs : string[] } > ([

      {
        type    : "list",
        name    : 'addInputs',
        message : "Would you like to add additional Inputs to this component? list them along with their types as in the following example > YourInputName01:InputType01, YourInputName02:InputType02.",
      },
    ]);



    if ( inputResponses.addInputs.length > 0 ) {

      responses.inputSpecs!.declarations = [ ...inputResponses.addInputs ];

    }




    const insertionResponse = await enquirer.prompt< { componentClassName : string } >([

      {
        type    : 'input',
        name    : 'insertToggle',
        message : 'Would you like to immediately import this into a component?  If not leave blank and continue.'
      }

    ]);

    if ( insertionResponse.componentClassName !== '' ) {

      responses.insertionSpecs!.parentComponentClassName = insertionResponse.componentClassName;



      if ( responses.inputSpecs && responses.inputSpecs.declarations.length > 0 ) {

        const response = await enquirer.prompt< { connectInputs : string[] } > ([
  
          {
            type    : 'list',
            name    : 'connectInputs',
            message : 'Would you like to immediately pass data into your inputs?  If so make a comma separated list in the following format. => YourInput:YourData.propA, AnotherInput:YourData.propB'
          }
  
        ]);
  
        responses.inputSpecs.bindings = ( response.connectInputs.length > 0 ? [ ...response.connectInputs ] : undefined );
  
      }

    }
    
    options = { ...responses };


  }



  /*//  Define the type of form controll you're generating.
  if ( options.componentType === 'custom form control' ) {

    const response = await enquirer.prompt< { controlType : "FormGroup" | "FormControl" | "FormArrayGroup" } > ([
      {
        type    : 'select',
        name    : 'controlType',
        message : 'What type of control will this be?',
        choices : ['FormGroup', 'FormControl', 'FormArrayGroup'],
      },
    ]);

    options.controlType = response.controlType;

  }



  // Define type annotation of your custom form control
  if ( options.componentType === "custom form control" ) {

    const response = await enquirer.prompt< { typeAnnotation : string } >([
      {
        type    : 'input',
        name    : 'typeAnnotation',
        message : 'What is the type of your control? (Exclude outer brackets)',
      },
    ]);

    options.typeAnnotation = response.typeAnnotation;

  }



  // Ask if there' s a global import path for types / interfaces
  if( options.componentType === "custom form control" ){

    const response = await enquirer.prompt< { hasGlobalTypePath : "yes" | "no" } >([
      {
        type    : 'select',
        name    : 'hasGlobalTypePath',
        message : 'Do you have a globally registered path to your types/interfaces?  If not the import path will need to be added manually.',
        choices : [ 'yes', 'no' ]
      }
    ]);
    
    options.hasGlobalTypePath = response.hasGlobalTypePath;

  }

  
  
  // Add global import path for types / interfaces
  if ( options.hasGlobalTypePath === "yes" ) {


    const response = await enquirer.prompt< { globalTypePath : string } > ([
      
      {
        type    : 'input',
        name    : 'globalTypePath',
        message : 'What is the path to your global types/interfaces?',
      }

    ]);

    options.globalTypePath = response.globalTypePath;


  }

  
  
  // Enter name of FormArrayGroup property
  if ( options.controlType === "FormArrayGroup" ) {

    const response = await enquirer.prompt< { listPropertyName : string } >([
      {
        type    : 'input',
        name    : 'listPropertyName',
        message : 'What is the name of your FormArray control?',
      },
    ]);

    options.listPropertyName = response.listPropertyName;

  }

  
  
  //  Define the type of form control the FormArrayGroup iterates.
  if( options.controlType === "FormArrayGroup" ) {

    const response = await enquirer.prompt< { listItemType : "FormControl" | "FormGroup" | "FormArrayGroup" } >([
      {
        type    : 'select',
        name    : 'listItemType',
        message : 'What type of item will the FormArray iterate?',
        choices : [ 'FormControl', 'FormGroup', 'FormArrayGroup' ]
      }
    ]);

    options.listItemType = response.listItemType;

  }



  //  Enter the type annotation of the item iterated in the FormArrayGroup.
  if( options.controlType === "FormArrayGroup" ) {
    
    const response = await enquirer.prompt< { listItemAnnotation : string } >([
      {
        type    : 'input',
        name    : 'listItemAnnotation',
        message : 'What is the type of this item?'
      }
    ]);

    options.listItemAnnotation = response.listItemAnnotation;

  }

  
  
  //  Check if import path for FormArrayGroup item's type annotation is the same as global type import.
  if( options.controlType === 'FormArrayGroup' && options.globalTypePath !== undefined ) {

    const response = await enquirer.prompt< { isListItemTypeImportGlobal : 'yes' | 'no' } >([
      {
        type    : 'select',
        name    : 'isListItemTypeImportGlobal',
        message : 'Is the type/interface for this item imported from your global path?',
        choices : [ 'yes', 'no' ]
      }
    ]);

    options.isListItemTypeGlobal = response.isListItemTypeImportGlobal;

  }

  
  
  //  Check to see if they'd like to enter another import path if different from global.
  if( options.isListItemTypeGlobal === 'no' ) {

    const response = await enquirer.prompt< { listItemTypeImport : string | null } >([
      {
        type    : 'input',
        name    : 'listItemTypeImport',
        message : 'Would you like to enter another path?  Leave blank if no.'
      }
    ]);



    if( response.listItemTypeImport !== '' && response.listItemTypeImport !== null ){

      options.listItemTypeImport = response.listItemTypeImport;

    }



  }*/




  
 const sampleChildComponent : Schema = {
   name : 'test-child',
   project : 'ingredient-manager',
   location : 'src',
   componentType : 'custom form control',
   controlType : 'FormGroup',
   typeAnnotation : 'ElementWeightGroupType',
   hasGlobalTypePath : '@bake-a-weigh/site-types',
   connectInputs : [ 'Control:Control.controls.servingSize' ],
   insertInto : {
     parentComponentFileName : 'tester-parent',
     parentComponentClassName : 'TesterParentComponent',
     childComponentFileName : 'test-child',
     childComponentClassName : 'TestChildComponent',
     templateItem : `<lib-test-child [Control]="Control.controls.servingSize" />`,
     removeCode : {
       start : 5,
       end : 9,
     },
     childComponentPath : 'libs/apps/ingredient-manager/src/test-child/test-child.component'
   }

 }

 options = sampleChildComponent;
  
  //  Fetch the target project to add component to.
  const projects       = getProjects( tree );
  const targetProject  = projects.get( options.project );


  /*if( targetProject !== undefined ) {
    
    const sampleParentComponent = new OvaadFileWriter( targetProject, options.insertInto! );

    const updatedProject = sampleParentComponent.addNewComponentToComponent(options.insertInto!);

    //const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
    //const updatedCode = printer.printFile( updatedProject!.newFile! );
    //fs.writeFileSync(updatedProject!.path, updatedCode, "utf-8");
  }*/
  
  //  Make sure project exist before continuing and stop process if not.
  if ( !targetProject ) { throw new Error( `Project "${ options.project }" not found.` ); }
  
    
  //  For preparing data to use in __tmpl__ files.
  const componentNames  = names( options.name );
  const targetPath      = path.join( targetProject.root, options.location, componentNames.fileName );
  const importList      : string[] = [];
  const metaDataImports : string[] = [];
  const propList        : string[] = [];


  if ( options.componentType === 'custom form control' ) {



    if( options.customControlSpecs!.controlType ) {
      
      
      
      if( options.customControlSpecs!.controlType === 'FormGroup' || options.customControlSpecs!.controlType === 'FormArrayGroup' ) {

        const moduleImports : string[] = ['ReactiveFormsModule', 'FormGroup'];



        if(options.customControlSpecs!.formArraySpecs!.controlType === 'FormControl'){ moduleImports.push('FormControl'); }
  
        importList.push( createImportScript( moduleImports, '@angular/forms' ) );
        metaDataImports.push( 'ReactiveFormsModule' );
        
      }

      if( options.customControlSpecs!.controlType === 'FormControl' ) {
  
        importList.push( createImportScript( [ 'FormsModule', 'FormControl' ], '@angular/forms' ) );
        metaDataImports.push( 'FormsModule' );
  
      }

      propList.push( createControlInput( options.customControlSpecs!.controlType === 'FormArrayGroup' ? 'FormGroup' : options.customControlSpecs!.controlType, options.customControlSpecs!.typeAnnotation ) );

    }





    if( options.customControlSpecs?.annotationImportPath ) {

      const importIdentifiers : string[] = [ options.customControlSpecs.typeAnnotation ];

      

      if(

        options.customControlSpecs.formArraySpecs &&
        options.customControlSpecs.formArraySpecs.annotationImportPath &&
        options.customControlSpecs.formArraySpecs.annotationImportPath ===
        options.customControlSpecs.annotationImportPath

      ){ importIdentifiers.push( options.customControlSpecs.formArraySpecs.controlTypeAnnotation ) }



      importList.push(createImportScript( importIdentifiers, options.customControlSpecs.annotationImportPath ) );

    }


    else {



      if( options.customControlSpecs?.formArraySpecs?.annotationImportPath) {

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

  const componentOptions = {

    componentType      : options.componentType,
    controlType        : options.controlType  ?? undefined,
    listItemType       : options.listItemType ?? undefined,
    listPropertyName   : options.listPropertyName   ?? undefined,
    listItemAnnotation : options.listItemAnnotation ?? undefined,
    importList         : [ ...importList      ],
    metaDataImports    : [ ...metaDataImports ],
    propList           : [ ...propList        ],
    projectPrefix      : targetProject.prefix,
    ...componentNames

  }

  
  
  /*generateFiles(
    tree,
    path.join(__dirname, 'files'),
    targetPath,
    { ...componentOptions,  tmpl : '' }
  );
  
  await formatFiles( tree );*/



  if( options.insertInto !== undefined ) {

    const parentComponent = new OvaadFileWriter( targetProject, options.insertInto );
    //console.log(parentComponent);
    const updatedProject = parentComponent.addNewComponentToComponent( options.insertInto! );

    //console.log(updatedProject);
    //const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

    //const updatedComponentCode = printer.printFile( updatedProject!.newComponentFile! );
    //const updatedTemplateCode = printer.printFile( updatedProject!.newTemplateFile!.join('\n') );
    const updatedTemplateCode = updatedProject!.newTemplateFile!.join('\n');


    fs.writeFileSync(updatedProject!.componentPath, updatedProject!.newComponentFile!, 'utf-8' );
    fs.writeFileSync(updatedProject!.templatePath, updatedTemplateCode,  'utf-8' );

  }

}

export default ovaadAngularComponentGenerator;