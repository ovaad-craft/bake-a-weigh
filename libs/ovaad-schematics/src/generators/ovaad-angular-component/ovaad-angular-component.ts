import {
  formatFiles,
  generateFiles,
  Tree,
  names,
  getProjects
} from '@nx/devkit';
import * as path from 'path';
import { OvaadAngularComponentGeneratorSchema as Schema } from './schema';







export async function ovaadAngularComponentGenerator( tree: Tree, options: Schema ) {

  const componentNames          = names(options.name);
  const projects                = getProjects(tree);
  const targetProject           = projects.get(options.project);


  
  if ( !targetProject ) { throw new Error(`Project "${options.project}" not found.`); }
  
  
  
  const targetPath = path.join( targetProject.root, options.location, componentNames.fileName );

  
  
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    targetPath,
    { ...componentNames,  tmpl : '' }
  );
  
  await formatFiles(tree);



}

export default ovaadAngularComponentGenerator;
