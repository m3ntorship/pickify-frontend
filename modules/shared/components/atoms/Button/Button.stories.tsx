import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import Button from './Button';
import type { IButton } from './types/IButton';
import * as EButton from './types/EButton';

export default {
  component: Button,
  title: 'atoms/Button',
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['large', 'medium', 'small'],
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
        options: ['primary', 'secondary', 'text'],
      },
    },
  },
};
const Template: Story<IButton.IProps> = (args): ReactElement => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: EButton.buttonSizeValues.MEDIUM,
  variant: EButton.buttonVariantValues.PRIMARY,
  disabled: false,
  leftIcon: false,
  rightIcon: false,
  onlyIcon: false,
  children: 'Button',
};
