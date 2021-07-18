import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import ImageView from './ImageView';
import type { IImageView } from './IImageView';

export default {
  component: ImageView,
  title: 'Atoms/ImageView',
};
const Template: Story<IImageView.IProps> = (args): ReactElement => (
  <div className="flex w-full h-full">
    <ImageView {...args} />
  </div>
);
export const Default = Template.bind({});
Default.args = {
  imgSrc: 'https://placeimg.com/640/480/any',
  id: 'image_1',
  imgAlt: 'group',
};
