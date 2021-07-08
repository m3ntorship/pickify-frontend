import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import ImagePollUncovered from './ImagePollUncovered';
import type { IImagePollUncovered } from './types/IImagePollUncovered';

export default {
  title: 'molecules/ImagePollUncovered',
  component: ImagePollUncovered,
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
    optionBody: {
      control: {
        type: 'radio',
        options: ['yes', 'no'],
      },
    },
  },
};

const Template: Story<IImagePollUncovered.IProps> = (args): ReactElement => (
  <div className="h-21xl">
    <ImagePollUncovered {...args} />
  </div>
);

export const ImagePollUncoveredStory = Template.bind({});
ImagePollUncoveredStory.args = {
  percentage: 30,
  mostVoted: true,
  leastVoted: false,
  id: 'option_1',
  type: 'vertical',
};
