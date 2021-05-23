import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import VotingStats from './VontingStats';
import type { IVotingStats } from './types/IVontingStats';

export default {
  title: 'molecules/VotingStats',
  component: VotingStats,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['vertical', 'circular'],
      },
    },
  },
};

const Template: Story<IVotingStats.IProps> = (args): ReactElement => (
  <VotingStats {...args} />
);

const firstVoteGroup = 20;
const secondVoteGroup = 80;
const thirdVoteGroup = 15;
const forthVoteGroup = 25;
const optionVotes: number[] = [
  firstVoteGroup,
  secondVoteGroup,
  thirdVoteGroup,
  forthVoteGroup,
];
const totalVotes = 140;
const votes = 80;

export const sliderStory = Template.bind({});
sliderStory.args = {
  optionVotes,
  totalVotes,
  votes,
  type: 'vertical',
};
