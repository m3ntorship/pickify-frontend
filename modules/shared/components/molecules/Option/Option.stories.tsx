import React from 'react';
import type { Story, Meta } from '@storybook/react';
import Option from './Option';
import type { IOption } from './types/Option';

export default {
  title: 'Molecules/Option',
  component: Option,
} as Meta;

const Template: Story<IOption.IProps> = (args) => <Option {...args} />;

export const option = Template.bind({});
option.args = {
  id: 'text input',
  deletable: true,
  letter: 'A',
  placeholder: 'Type caption (optional)',
};
