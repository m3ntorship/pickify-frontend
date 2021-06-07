import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import ImagePollImage from './ImagePollImage';
import type { IImagePollImage } from './IImagePollImage';

export default {
  component: ImagePollImage,
  title: 'Molecules/ImagePollImage',
};
const Template: Story<IImagePollImage.IProps> = (args): ReactElement => (
  <ImagePollImage {...args} />
);
export const Default = Template.bind({});
Default.args = {};
