import React from 'react';
import type { Story, Meta } from '@storybook/react';
import UploadingImage from './UploadingImage';
import type { IUploadingImage } from './IUploadingImage';

export default {
  title: 'molecules/UploadingImage',
  component: UploadingImage,
  argTypes: {},
} as Meta;

const Template: Story<IUploadingImage.IProps> = (args) => (
  <UploadingImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  textInputLetter: 'a',
  id: '1',
};
