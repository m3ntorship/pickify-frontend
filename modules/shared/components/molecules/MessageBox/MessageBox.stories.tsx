import React from 'react';
import type { Story, Meta } from '@storybook/react';
import MessageBox from './MessageBox';
import type { IMessageBoxType } from './types/IMessageBox';
import * as EMessageBoxType from './types/EMessageBox';
import { configPostCreation } from '../../../configuration/ConfigPostCreation/config';

export default {
  title: 'molecules/MessageBox',
  component: MessageBox,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: [
          EMessageBoxType.MessageBoxType.Error,
          EMessageBoxType.MessageBoxType.Success,
        ],
      },
    },
  },
} as Meta;

const Template: Story<IMessageBoxType.IProps> = (args) => (
  <MessageBox {...args} />
);

export const messageBox = Template.bind({});
messageBox.args = {
  type: EMessageBoxType.MessageBoxType.Error,
  msg: 'Image couldn’t be uploaded!',
  subMsg: `Max size is ${configPostCreation.maxFileSizeInMegaByte} MB`,
};
