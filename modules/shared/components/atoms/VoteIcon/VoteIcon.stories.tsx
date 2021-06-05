import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import VoteIcon from './VoteIcon';
import type { IVoteIcon } from './IVoteIcon';

export default {
  title: 'Atoms/VoteIcon',
  component: VoteIcon,
  argTypes: {
    isOneImageVote: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template: Story<IVoteIcon.IProps> = (args): ReactElement => (
  <VoteIcon {...args} />
);

export const VoteIconStory = Template.bind({});
VoteIconStory.args = {
  isOneImageVote: false,
};
