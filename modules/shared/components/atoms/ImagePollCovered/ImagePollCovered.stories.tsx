import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import ImagePollCovered from './ImagePollCovered';
import type { IImagePollCovered } from './IImagePollCovered';

export default {
  title: 'Atoms/ImagePollCovered',
  component: ImagePollCovered,
  argTypes: {
    isOneImageVote: {
      control: {
        type: 'boolean',
      },
    },
    like: {
      control: {
        type: 'boolean',
      },
    },
    dislike: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template: Story<IImagePollCovered.IProps> = (args): ReactElement => (
  <ImagePollCovered {...args} />
);

export const ImagePollCoveredStory = Template.bind({});
ImagePollCoveredStory.args = {
  isOneImageVote: false,
  like: false,
  dislike: false,
};
