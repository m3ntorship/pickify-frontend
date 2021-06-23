import React from 'react';
import type { Story, Meta } from '@storybook/react';
import OptionGroups from './OptionGroups';
import type { IOptionGroups } from './IOptionGroups';

export default {
  title: 'Molecules/OptionGroups',
  component: OptionGroups,
} as Meta;

const Template: Story<IOptionGroups.IProps> = (args) => (
  <OptionGroups {...args} />
);

export const Default = Template.bind({});

Default.args = {
  groups: [
    {
      id: '0',
      name: '',
      options: [
        { id: '0', body: '' },
        { id: '1', body: '' },
      ],
    },
  ],
};
