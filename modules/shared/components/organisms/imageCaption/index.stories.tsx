import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import ImageCaption from '.';
import type { IImgCaption } from './IImgCaption';

export default {
  title: 'organisms/imgCaption',
  component: ImageCaption,
};

const Template: Story<IImgCaption.IProps> = (args): ReactElement => (
  <ImageCaption {...args} />
);

export const imageCaption = Template.bind({});
imageCaption.args = {
  imgCaption: 'Black T-shirt',
  imgCaptionLetter: 'A',
};
