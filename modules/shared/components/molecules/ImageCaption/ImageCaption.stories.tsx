import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import ImageCaption from './ImageCaption';
import type { IImageCaption } from './IImageCaption';

export default {
  title: 'molecules/imgCaption',
  component: ImageCaption,
};

const Template: Story<IImageCaption.IProps> = (args): ReactElement => (
  <ImageCaption {...args} />
);

export const imageCaption = Template.bind({});
imageCaption.args = {
  imgCaption: 'Black T-shirt',
  imgCaptionLetter: 'A',
};
