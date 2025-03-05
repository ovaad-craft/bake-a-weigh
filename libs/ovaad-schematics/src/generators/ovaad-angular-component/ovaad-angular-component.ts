import {
  formatFiles,
  generateFiles,
  Tree,
  names,
  getProjects
} from '@nx/devkit';
import * as path from 'path';
import { OvaadAngularComponentGeneratorSchema as Schema } from './schema';
import { strings } from '@angular-devkit/core';

export async function ovaadAngularComponentGenerator(
  tree: Tree,
  options: Schema
) {
      //const projectRoot = `libs/${options.name}`;
  
      /*addProjectConfiguration(tree, options.name, {
        root        : projectRoot,
        projectType : 'library',
        sourceRoot  : `${projectRoot}/src`,
        targets     : {},
      });*/

      const componentNames = names(options.name);
      const projects = getProjects(tree);
      const targetProject = projects.get(options.project)
      const { classify, dasherize } = strings;

      if ( !targetProject ) {
        throw new Error(`Project "${options.project}" not found.`);
      }

      const targetPath = path.join( targetProject.root, options.location, componentNames.fileName )

      generateFiles(
        tree,
        path.join(__dirname, 'files'),
        targetPath,
        { ...componentNames, classify, dasherize, tmpl : '' }
      );
      await formatFiles(tree);

}

export default ovaadAngularComponentGenerator;
