import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import ImagePollOption from './ImagePollOption';
import type { IImagePollOption } from './IImagePollOption';

export default {
  component: ImagePollOption,
  title: 'Molecules/IImagePollOption',
  argTypes: {
    percentage: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
};
const Template: Story<IImagePollOption.IProps> = (args): ReactElement => (
  <ImagePollOption {...args} />
);
export const Default = Template.bind({});
Default.args = {
  media: [{ url: 'eb519bfc-6f4c-4dfb-addc-75310e3945aa' }],
  imgCaption: 'caption 1',
  imgCaptionLetter: 'A',
  optionId: 'option_1',
  leastVoted: false,
  mostVoted: false,
  percentage: 80,
  isVoted: true,
};
