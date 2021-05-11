import React from 'react';
import type { Story, Meta } from '@storybook/react';
import TextInput from './TextInput';
import type { ITextInputs } from './ITextInputs';

export default {
  title: 'Essam/Atoms/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<ITextInputs.IProps> = (args) => <TextInput {...args} />;

export const textInput = Template.bind({});
textInput.args = {
  label: 'label',
  id: 'my label',
  inputType: 'default',
  variants: 'default',
  disabled: false,
  placeholder: 'text Input ',
  letter: 'A',
};
