import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import OptionGroup from './OptionGroup';
import type { IOptionGroup } from './types/IOptionGroup';

export default {
  title: 'Molecules/OptionGroup',
  component: OptionGroup,
} as Meta;

const Template: Story<IOptionGroup.IProps> = (args) => {
  const methods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  return (
    <FormProvider {...methods}>
      <OptionGroup {...args} />
    </FormProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  id: 'G0',
  index: 0,
  options: [
    { id: 'test', body: '' },
    { id: 'test1', body: '' },
  ],
  addOptionHandler: (): void => undefined,
  deleteOptionHandler: (): void => undefined,
  onBlurOptionHandler: (): void => undefined,
  onChangeOptionValueHandler: (): void => undefined,
  onClickDeleteOptionValueHandler: (): void => undefined,
};
