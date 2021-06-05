import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import VoteImage from './VoteImage';
import type { IVoteImage } from './IVoteImage';

export default {
  title: 'Atoms/VoteImage',
  component: VoteImage,
  argTypes: {
    oneImage: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template: Story<IVoteImage.IProps> = (args): ReactElement => (
  <VoteImage {...args} />
);

export const VoteImageStory = Template.bind({});
VoteImageStory.args = {
  oneImage: false,
};
