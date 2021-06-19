import React from 'react';
import type { Story, Meta } from '@storybook/react';
import TextDefault from './Option';
import type { IOption } from './types/Option';

export default {
  title: 'Molecules/Option',
  component: TextDefault,
} as Meta;

const Template: Story<IOption.IProps> = (args) => <TextDefault {...args} />;

export const Option = Template.bind({});
Option.args = {
  id: 'text input',
  deletable: true,
  letter: 'A',
  placeholder: 'Type caption (optional)',
};
