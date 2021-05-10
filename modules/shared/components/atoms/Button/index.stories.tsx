import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import Button from '.';
import { IButton } from './IButton';

export default {
  component: 'Atoms/Button',
  title: 'TS/Button',
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['lg', 'md', 'sm'],
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
  size: IButton.buttonSizeValues.large,
  variant: IButton.buttonVariantValues.PRIMARY,
  disabled: false,
  leftIcon: false,
  rightIcon: false,
  onlyIcon: false,
  children: 'Button',
};
