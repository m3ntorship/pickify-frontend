import React from 'react';
import type { Story, Meta } from '@storybook/react';
import OptionGroupWrapper from './OptionGroupWrapper';
import type { IOptionGroupWrapper } from './IOptionGroupWrapper';

export default {
  title: 'Molecules/OptionGroupWrapper',
  component: OptionGroupWrapper,
} as Meta;

const Template: Story<IOptionGroupWrapper.IProps> = (args) => (
  <OptionGroupWrapper {...args} />
);

export const Default = Template.bind({});

Default.args = {
  optionGroup: {
    id: '0',
    groupName: '',
    options: [
      { id: '0', value: '' },
      { id: '1', value: '' },
    ],
  },
};
