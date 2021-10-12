import React from 'react';
import type { Story, Meta } from '@storybook/react';
import TextInput from './TextInput';
import type { ITextInputs } from './types/ITextInputs';
import * as ETextInput from './types/ETextInput';

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<ITextInputs.IProps> = (args) => <TextInput {...args} />;

export const textInput = Template.bind({});
textInput.args = {
  label: 'label',
  id: 'my label',
  inputType: ETextInput.InputType.RightIcon,
  variants: ETextInput.Variants.Default,
  disabled: false,
  placeholder: 'text Input',
  letter: 'A',
  extraClasses: 'rounded-t-none',
};
