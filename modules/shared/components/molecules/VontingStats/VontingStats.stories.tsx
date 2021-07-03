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

const Template: Story<IVotingStats.IProps> = (args): ReactElement => (
  <div className="h-21xl">
    <VotingStats {...args} />
  </div>
);

export const sliderStory = Template.bind({});
sliderStory.args = {
  percentage: 30,
  mostVoted: true,
  leastVoted: false,
  verticalMeterHeight: 300,
  id: 'option_1',
  type: 'vertical',
};
