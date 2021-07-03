import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import OptionGroupWrapper from './OptionGroupWrapper';
import type { IOptionGroupWrapper } from './IOptionGroupWrapper';

export default {
  title: 'Molecules/OptionGroupWrapper',
  component: OptionGroupWrapper,
} as Meta;

const Template: Story<IOptionGroupWrapper.IProps> = (args) => {
  const methods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  return (
    <FormProvider {...methods}>
      <OptionGroupWrapper {...args} />
    </FormProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  id: 'G1',
  index: 1,
  optionsGroupName: 'Group 1',
  updateOptionsGroupNameHandler: (): void => undefined,
  deleteOptionsGroupHandler: (): void => undefined,
};
