import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import Option from './Option';
import type { IOption } from './types/Option';

export default {
  title: 'Molecules/Option',
  component: Option,
} as Meta;

const Template: Story<IOption.IProps> = (args) => {
  const methods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  return (
    <FormProvider {...methods}>
      <Option {...args} />
    </FormProvider>
  );
};

export const option = Template.bind({});
option.args = {
  id: 'text input',
  index: 0,
  deletable: true,
  optionValue: 'This is option',
  onChangeOptionValueHandler: (): void => undefined,
  onClickDeleteOptionValueHandler: (): void => undefined,
  deleteOptionHandler: (): void => undefined,
  onBlurOptionHandler: (): void => undefined,
};
