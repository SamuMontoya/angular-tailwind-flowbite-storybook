import type { Meta, StoryObj } from '@storybook/angular';
import { Spinner } from './spinner';

const meta: Meta<Spinner> = {
  title: 'Example/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<Spinner>;

export const Primary: Story = {

};
