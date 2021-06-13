import React from 'react';
import type { Story, Meta } from '@storybook/react';
import OptionGroup from './OptionGroup';
import type { IOptionGroup } from './types/IOptionGroup';

export default {
  title: 'Molecules/OptionGroup',
  component: OptionGroup,
} as Meta;

const Template: Story<IOptionGroup.IProps> = (args) => (
  <OptionGroup {...args} />
);

export const Default = Template.bind({});

Default.args = {
  groupId: '0',
  options: [
    { id: 'test', value: '' },
    { id: 'test1', value: '' },
  ],
};
