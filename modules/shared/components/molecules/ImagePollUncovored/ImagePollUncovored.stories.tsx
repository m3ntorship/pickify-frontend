import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import ImagePollUncovored from './ImagePollUncovored';
import type { IImagePollUncovored } from './types/IImagePollUncovored';

export default {
  title: 'molecules/ImagePollUncovored',
  component: ImagePollUncovored,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['vertical', 'circular'],
      },
    },
    verticalMeterHeight: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
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

const Template: Story<IImagePollUncovored.IProps> = (args): ReactElement => (
  <div className="h-21xl">
    <ImagePollUncovored {...args} />
  </div>
);

export const ImagePollUncovoredStory = Template.bind({});
ImagePollUncovoredStory.args = {
  percentage: 30,
  mostVoted: true,
  leastVoted: false,
  id: 'option_1',
  type: 'vertical',
};
