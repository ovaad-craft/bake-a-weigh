import {
  formatFiles,
  generateFiles,
  Tree,
  names,
  getProjects
} from '@nx/devkit';
import * as path from 'path';
import * as enquirer from 'enquirer';
import { ComponentInjectionSpecs, OvaadAngularComponentGeneratorSchema as Schema } from './schema';





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







export async function ovaadAngularComponentGenerator( tree : Tree, options : Schema ) {



  //  Prompt options that load after entering the name of the component and the type of component
  //  you want to generate.



  //  Prompts for generating standard component.
  if ( options.componentType === 'standard' ) {

    let responses! : Schema;


    
    //  Determine if component should have any inputs and whether it should be immediately
    //  imported into another component. 
    const response = await enquirer.prompt< { addInputs : string, insertToggle : boolean, insertInto : ComponentInjectionSpecs } >([

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

    responses.addInputs = [ ...response.addInputs ];





    
    
    const insertComponent = response.insertToggle;



    //  If user chooses to immediately import the new component into an existing component.
    if( insertComponent ){

      
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

      responses.insertInto!.componentClassName = response.componentClassName;


      
      //  Determine the lines of code to replace if user chooses to replace code.
      if ( response.replaceCode ) {

        const response = await enquirer.prompt< { lines : number[] } >([

          {
            type : 'list',
            name : 'lines',
            message : 'Enter the first and last lines of code you want to replace separate by a comma. => example: 8, 23'
          }

        ]);

        responses.insertInto!.removeCode = { start : response.lines[ 0 ], end : response.lines[ 1 ] };
        responses.insertInto!.insertAt   = response.lines[ 0 ];

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

        responses.insertInto!.insertAt = response.line;

      }

    }

    options = { ...responses };

  }



  //  Define the type of form controll you're generating.
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



  }




  
  
  //  Fetch the target project to add component to.
  const projects       = getProjects( tree );
  const targetProject  = projects.get( options.project );
  
  //  Make sure project exist before continuing and stop process if not.
  if ( !targetProject ) { throw new Error( `Project "${ options.project }" not found.` ); } 
  
  //  For preparing data to use in __tmpl__ files.
  const componentNames  = names( options.name );
  const targetPath      = path.join( targetProject.root, options.location, componentNames.fileName );
  const importList      : string[] = [];
  const metaDataImports : string[] = [];
  const propList        : string[] = [];


  if ( options.componentType === 'custom form control' ) {

    if( options.controlType ) {
      
      if( options.controlType === 'FormGroup' || options.controlType === 'FormArrayGroup' ) {

        const moduleImports : string[] = ['ReactiveFormsModule', 'FormGroup'];

        if(options.listItemType === 'FormControl'){ moduleImports.push('FormControl'); }
  
        importList.push( createImportScript( moduleImports, '@angular/forms' ) );
        metaDataImports.push( 'ReactiveFormsModule' );
        
      }

      if( options.controlType === 'FormControl' ) {
  
        importList.push( createImportScript( [ 'FormsModule', 'FormControl' ], '@angular/forms' ) );
        metaDataImports.push( 'FormsModule' );
  
      }

      propList.push( createControlInput( options.controlType === "FormArrayGroup" ? 'FormGroup' : options.controlType, options.typeAnnotation! ) );

    }
    

    if( options.hasGlobalTypePath === 'yes' && options.globalTypePath ) {

      const importItems : string[] = [ `${options.typeAnnotation}` ];

      if( options.isListItemTypeGlobal === 'yes' && options.listItemType ){
        importItems.push(options.listItemAnnotation!);
      }

      importList.push( createImportScript( [ ...importItems ], options.globalTypePath ) );

    }

    if( options.isListItemTypeGlobal === 'no' && options.listItemTypeImport ){

      importList.push( createImportScript( [ `${options.listItemType}` ], options.listItemTypeImport ) );

    }


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

  
  
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    targetPath,
    { ...componentOptions,  tmpl : '' }
  );
  
  await formatFiles( tree );

}

export default ovaadAngularComponentGenerator;
