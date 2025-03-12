import {
  formatFiles,
  generateFiles,
  Tree,
  names,
  getProjects
} from '@nx/devkit';
import * as path from 'path';
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

  const componentNames          = names(options.name);
  //const componentVars           = { componentType : options.componentType, ...componentNames};
  const projects                = getProjects(tree);
  const targetProject           = projects.get(options.project);


  
  if ( !targetProject ) { throw new Error(`Project "${options.project}" not found.`); }
  
  
  
  const targetPath = path.join( targetProject.root, options.location, componentNames.fileName );

  const importList : string[] = [];

  const metaDataImports : string[] = [];

  const propList : string[] = [];


  if ( options.componentType === 'custom form control' ) {

    importList.push( createImportScript( [ 'Input' ], '@angular/core' ) );

    if(options.controlType) {
      
      if( options.controlType === 'FormGroup' || options.controlType === 'FormArrayGroup' ) {
  
        importList.push( createImportScript( [ 'ReactiveFormsModule', 'FormGroup' ], '@angular/forms' ) );
        metaDataImports.push( 'ReactiveFormsModule' );
        
      }

      if( options.controlType === 'FormControl' ) {
  
        importList.push( createImportScript( [ 'FormsModule', 'FormControl' ], '@angular/forms' ) );
        metaDataImports.push( 'FormsModule' );
  
      }

      propList.push( createControlInput( options.controlType, options.typeAnnotation! ) );

    }    
    

    if( options.hasGlobalTypePath === 'yes' && options.globalTypePath ) {

      importList.push( createImportScript( [`${options.typeAnnotation}`], options.globalTypePath ) );

    }


  }

  const componentOptions = {
    importList : [...importList],
    metaDataImports : [...metaDataImports],
    propList : [...propList],
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
