import React from 'react';
import type { Story, Meta } from '@storybook/react';
import Misc from './Misc';
import type { IMisc } from './types/IMisc';
import * as EMisc from './types/EMisc';

export default {
  title: 'molecules/Misc',
  component: Misc,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: [EMisc.MiscType.Error, EMisc.MiscType.Success],
      },
    },
  },
} as Meta;

const Template: Story<IMisc.IProps> = (args) => <Misc {...args} />;

export const misc = Template.bind({});
misc.args = {
  type: EMisc.MiscType.Error,
  msg: 'Image couldn’t be uploaded!',
  subMsg: 'Max size is 2 MB',
};
