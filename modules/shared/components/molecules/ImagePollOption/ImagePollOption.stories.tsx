import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import ImagePollOption from './ImagePollOption';
import type { IImagePollOption } from './IImagePollOption';

export default {
  component: ImagePollOption,
  title: 'Molecules/IImagePollOption',
};
const Template: Story<IImagePollOption.IProps> = (args): ReactElement => (
  <ImagePollOption {...args} />
);
export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://source.unsplash.com/random',
  isOneImageVote: true,
  imgCaption: 'aaa',
  imgCaptionLetter: 'A',
};
