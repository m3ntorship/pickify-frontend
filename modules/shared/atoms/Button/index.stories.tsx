import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import Button from '.';
import type { IButton } from './IButton';

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
  size: 'lg',
  variant: 'primary',
  disabled: false,
  leftIcon: false,
  rightIcon: false,
  children: 'Button',
};
