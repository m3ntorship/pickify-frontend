import React from 'react';
import type { Story, Meta } from '@storybook/react';
import TextDefault from './TextDefault';
import type { ITextDefault } from './types/TextDefault';

export default {
  title: 'Molecules/TextDefault',
  component: TextDefault,
} as Meta;

const Template: Story<ITextDefault.IProps> = (args) => (
  <TextDefault {...args} />
);

export const textDefault = Template.bind({});
textDefault.args = {
  id: 'text input',
  deletable: true,
  letter: 'A',
  placeholder: 'Type caption (optional)',
};
