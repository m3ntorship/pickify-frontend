import React from 'react';
import type { Story, Meta } from '@storybook/react';
import Divider from './Divider';
import type { IDivider } from './types/IDivider';
import * as EDivider from './types/EDivider';

export default {
  title: 'Atoms/Divider',
  component: Divider,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: [
          EDivider.DividerType.Horizontal,
          EDivider.DividerType.Vertical,
        ],
      },
    },
  },
} as Meta;

const Template: Story<IDivider.IProps> = (args) => <Divider {...args} />;

export const textInput = Template.bind({});
textInput.args = {
  type: EDivider.DividerType.Horizontal,
  length: '300px',
};
