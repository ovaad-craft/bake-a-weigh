import {
  formatFiles,
  generateFiles,
  Tree,
  names,
  getProjects,
  GeneratorCallback
} from '@nx/devkit';
import * as path from 'path';
import * as enquirer from 'enquirer';
import { CustomFormControlSpecs, OvaadAngularComponentGeneratorSchema as Schema } from './schema';





function createImportScript( items : string[], location : string ) : string {
  
  return `import { ${ items.length > 1 ? items.join(', ') : items[0] } } from '${location}';`;

}

function createPropAnnotation( item : string, annotation : string ) : string {

  return `${ item }< ${ annotation } >`;

}

function createControlInput( item : string, annotation: string ) : string {

  return `@Input() Control! : ${ createPropAnnotation( item, annotation ) };`;

}

export interface OvaadComponentOptions {
  importList? : string[];
  metaDataImports : string[];
  propList : string[];
}


export type CustomControlType = "FormGroup" | "FormControl" | "FormArrayGroup";

export interface CustomControlOptions {

  controlType       : CustomControlType;
  typeAnnotation    : string;
  hasGlobalTypePath : boolean;

}







export async function ovaadAngularComponentGenerator( tree: Tree, options: Schema ) {

  console.log(options);



  /*if ( options.componentType === 'custom form control' ) {
    const response = await enquirer.prompt<{}>
  }*/



  if ( options.componentType === "custom form control" ) {

    const response = await enquirer.prompt< { controlType: "FormGroup" | "FormControl" | "FormArrayGroup" } > ([
      {
        type    : 'select',
        name    : 'controlType',
        message : 'What type of control will this be?',
        choices : ['FormGroup', 'FormControl', 'FormArrayGroup'],
      },
    ]);
    options.controlType = response.controlType;
  }

  // Ask for typeAnnotation if componentType is "custom form control"
  if (options.componentType === "custom form control") {
    const response = await enquirer.prompt<{ typeAnnotation: string }>([
      {
        type    : 'input',
        name    : 'typeAnnotation',
        message : 'What is the type of your control? (Exclude outer brackets)',
      },
    ]);
    options.typeAnnotation = response.typeAnnotation;
  }

  if( options.componentType === "custom form control" ){

    const response = await enquirer.prompt<{ hasGlobalTypePath : "yes" | "no" }>([
      {
        type: 'select',
        name : 'hasGlobalTypePath',
        message : 'Do you have a globally registered path to your types/interfaces?  If not the import path will need to be added manually.',
        choices : ['yes', 'no']
      }
    ]);
    
    options.hasGlobalTypePath = response.hasGlobalTypePath;

  }

  // Ask for globalTypePath ONLY IF hasGlobalTypePath is "yes"
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

  // Ask for listPropertyName ONLY IF controlType is "FormArrayGroup"
  if (options.controlType === "FormArrayGroup") {
    const response = await enquirer.prompt<{ listPropertyName: string }>([
      {
        type: 'input',
        name: 'listPropertyName',
        message: 'What is the name of your FormArray control?',
      },
    ]);
    options.listPropertyName = response.listPropertyName;
  }

  if( options.controlType === "FormArrayGroup") {
    const response = await enquirer.prompt<{ listItemType : "FormControl" | "FormGroup" | "FormArrayGroup" }>([
      {
        type: 'select',
        name : 'listItemType',
        message : 'What type of item will the FormArray iterate?',
        choices : [ 'FormControl', 'FormGroup', 'FormArrayGroup' ]
      }
    ]);

    options.listItemType = response.listItemType
  }

  if( options.controlType === "FormArrayGroup") {
    const response = await enquirer.prompt<{ listItemAnnotation : string }>([
      {
        type: 'input',
        name : 'listItemAnnotation',
        message : 'What is the type of this item?'
      }
    ]);

    options.listItemType = response.listItemAnnotation
  }

  if( options.controlType === 'FormArrayGroup' && options.globalTypePath !== undefined ) {

    const response = await enquirer.prompt< { isListItemTypeImportGlobal : 'yes' | 'no'} >([

      {
        type : 'select',
        name : 'isListItemTypeImportGlobal',
        message : 'Is the type/interface for this item imported from your global path?',
        choices : [ 'yes', 'no' ]
      }
    ]);

    options.isListItemTypeGlobal = response.isListItemTypeImportGlobal;

  }

  if( options.isListItemTypeGlobal === 'no' ) {

    const response = await enquirer.prompt< { listItemTypeImport : string | null } >([

      {
        type : 'input',
        name : 'listItemTypeImport',
        message : 'Would you like to enter another path?  Leave blank if no.'
      }
    ]);

    if(response.listItemTypeImport !== '' && response.listItemTypeImport !== null ){

      options.listItemTypeImport = response.listItemTypeImport;

    }

  }




  const componentNames = names( options.name );
  const projects       = getProjects( tree );
  const targetProject  = projects.get( options.project );


  
  if ( !targetProject ) { throw new Error(`Project "${options.project}" not found.`); }
  
  
  
  const targetPath = path.join( targetProject.root, options.location, componentNames.fileName );


  const importList      : string[] = [];
  const metaDataImports : string[] = [];
  const propList        : string[] = [];


  if ( options.componentType === 'custom form control' ) {

    if(options.controlType) {
      
      if( options.controlType === 'FormGroup' || options.controlType === 'FormArrayGroup' ) {
  
        importList.push( createImportScript( [ 'ReactiveFormsModule', 'FormGroup' ], '@angular/forms' ) );
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
        importItems.push(options.listItemType);
      }

      importList.push( createImportScript( [ ...importItems ], options.globalTypePath ) );

    }

    if( options.isListItemTypeGlobal === 'no' && options.listItemTypeImport ){

      importList.push( createImportScript( [ `${options.listItemType}` ], options.listItemTypeImport ) );

    }


  }

  const componentOptions = {

    componentType   : options.componentType,
    controlType     : options.controlType  ?? undefined,
    listPropertType : options.listItemType ?? undefined,
    importList      : [ ...importList      ],
    metaDataImports : [ ...metaDataImports ],
    propList        : [ ...propList        ],
    ...componentNames

  }

  
  
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    targetPath,
    { ...componentOptions,  tmpl : '' }
  );
  
  await formatFiles(tree);

}

export default ovaadAngularComponentGenerator;
