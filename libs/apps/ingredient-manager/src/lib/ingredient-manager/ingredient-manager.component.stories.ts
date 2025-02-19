import type { Meta, StoryObj } from '@storybook/angular';
import { IngredientManagerComponent } from './ingredient-manager.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<IngredientManagerComponent> = {
  component: IngredientManagerComponent,
  title: 'IngredientManagerComponent',
};
export default meta;
type Story = StoryObj<IngredientManagerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ingredient-manager works!/gi)).toBeTruthy();
  },
};
