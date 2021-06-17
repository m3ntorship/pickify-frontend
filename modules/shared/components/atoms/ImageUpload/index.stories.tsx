import React from 'react';
import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import ImageUpload from '.';
import type { IImageUpload } from './IImageUpload';

export default {
  component: ImageUpload,
  title: 'Atoms/ImageUpload',
};

const Template: Story<IImageUpload.IProps> = (args): ReactElement => (
  <ImageUpload {...args} />
);

export const Default = Template.bind({});
Default.args = {
  state: [],
  setState: (): boolean => true,
};
