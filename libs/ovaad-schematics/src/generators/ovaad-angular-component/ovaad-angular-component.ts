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







export async function ovaadAngularComponentGenerator( tree: Tree, options: Schema ) {

  console.log(options);



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

  // Ask for listPropertyName ONLY IF controlType is "FormArrayGroup"
  if (options.controlType === "FormArrayGroup") {
    const response = await enquirer.prompt<{ listPropertyName: string }>([
      {
        type: 'input',
        name: 'listPropertyName',
        message: 'What is the property name of your FormArray?',
      },
    ]);
    options.listPropertyName = response.listPropertyName;
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
    console.log(response.hasGlobalTypePath);
  }

  // Ask for globalTypePath ONLY IF hasGlobalTypePath is "yes"
  if (options.hasGlobalTypePath === "yes" ) {
    const response = await enquirer.prompt<{ globalTypePath: string }>([
      {
        type: 'input',
        name: 'globalTypePath',
        message: 'What is the path to your global types/interfaces?',
      },
    ]);
    options.globalTypePath = response.globalTypePath;
  }




  const componentNames          = names(options.name);
  const projects                = getProjects(tree);
  const targetProject           = projects.get(options.project);


  
  if ( !targetProject ) { throw new Error(`Project "${options.project}" not found.`); }
  
  
  
  const targetPath = path.join( targetProject.root, options.location, componentNames.fileName );

  const importList : string[] = [];

  const metaDataImports : string[] = [];

  const propList : string[] = [];


  if ( options.componentType === 'custom form control' ) {

    //importList.push( createImportScript( [ 'Input' ], '@angular/core' ) );

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

      importList.push( createImportScript( [`${options.typeAnnotation}`], options.globalTypePath ) );

    }


  }

  const componentOptions = {
    componentType   : options.componentType,
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
