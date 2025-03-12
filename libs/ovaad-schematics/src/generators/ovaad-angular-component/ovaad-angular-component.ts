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

function createPropAnnotation( item : CustomFormControlSpecs) : string {

  return `${ item.controlType }< ${ item.typeAnnotation } >`;

}

function createControlInput( item : CustomFormControlSpecs ) : string {

  return `@Input() Control! : ${ createPropAnnotation( item ) };`;

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

    if( options.controlInfo?.controlType === 'FormGroup' || options.controlInfo?.controlType === 'FormArrayGroup' ) {

      importList.push( createImportScript( [ 'ReactiveFormsModule', 'FormGroup' ], '@angular/forms' ) );
      metaDataImports.push( 'ReactiveFormsModule' );
      
    }
    
    if( options.controlInfo?.controlType === 'FormControl' ) {

      importList.push( createImportScript( [ 'FormsModule', 'FormControl' ], '@angular/forms' ) );
      metaDataImports.push( 'FormsModule' );

    }

    if( options.controlInfo?.hasGlobalTypePath === 'yes' && options.controlInfo.globalTypePath ) {

      importList.push( createImportScript( [`${options.controlInfo.typeAnnotation}`], options.controlInfo.globalTypePath));

    }

    propList.push( createControlInput(options.controlInfo!) );

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
