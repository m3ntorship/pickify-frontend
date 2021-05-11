import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import Checkbox from './index';
import type { ICheckbox } from './ICheckbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },

    size: {
      control: {
        type: 'select',
        options: ['Default', 'Small'],
      },
    },
  },
};

const Template: Story<ICheckbox.ICheckBoxProps> = (args): ReactElement => (
  <Checkbox {...args} />
);
export const checkbox = Template.bind({});
checkbox.args = {
  disabled: false,
  size: 'Default',
};
