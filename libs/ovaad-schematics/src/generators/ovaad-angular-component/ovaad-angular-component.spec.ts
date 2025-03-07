import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { ovaadAngularComponentGenerator } from './ovaad-angular-component';
import { OvaadAngularComponentGeneratorSchema } from './schema';

describe('ovaad-angular-component generator', () => {
  let tree: Tree;
  const options: OvaadAngularComponentGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await ovaadAngularComponentGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
