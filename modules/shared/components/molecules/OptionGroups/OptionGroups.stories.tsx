import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import OptionGroups from './OptionGroups';
import type { IOptionGroups } from './IOptionGroups';

export default {
  title: 'Molecules/OptionGroups',
  component: OptionGroups,
} as Meta;

const Template: Story<IOptionGroups.IProps> = (args) => {
  const methods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  return (
    <FormProvider {...methods}>
      <OptionGroups {...args} />
    </FormProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  groups: [
    {
      id: 'G1',
      name: 'Group 1',
      options: [
        { id: '0', body: '' },
        { id: '1', body: '' },
      ],
    },
    {
      id: 'G2',
      name: 'Group 2',
      options: [
        { id: '0', body: '' },
        { id: '1', body: '' },
      ],
    },
  ],
  addOptionHandler: (): void => undefined,
  addOptionsGroupHandler: (): void => undefined,
  deleteOptionHandler: (): void => undefined,
  deleteOptionsGroupHandler: (): void => undefined,
  onBlurOptionHandler: (): void => undefined,
  onChangeOptionValueHandler: (): void => undefined,
  onClickDeleteOptionValueHandler: (): void => undefined,
  updateOptionsGroupNameHandler: (): void => undefined,
};
