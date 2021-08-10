import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import Button from './Button';
import type { IButton } from './types/IButton';
import * as EButton from './types/EButton';
import ArrowDownIcon from '../../icons/arrowDown.svg';

export default {
  component: Button,
  title: 'atoms/Button',
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['xlarge', 'large', 'normal', 'medium', 'small'],
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
        options: ['primary', 'secondary', 'tertiary', 'text'],
      },
    },
  },
};
const Template: Story<IButton.IProps> = (args): ReactElement => (
  <Button {...args}>
    <ArrowDownIcon />
  </Button>
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
