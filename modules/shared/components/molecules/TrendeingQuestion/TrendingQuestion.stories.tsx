import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import TrendingQuestion from './TrendingQuestion';
import type { ITrendingQuestion } from './ITrendingQuestion';

export default {
  component: TrendingQuestion,
  title: 'Molecules/TrendingQuestion',
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
        options: ['Text Poll', 'Image Poll', 'Mini Survey'],
      },
    },
    text: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template: Story<ITrendingQuestion.IProps> = (args): ReactElement => (
  <TrendingQuestion {...args} />
);

export const Default = Template.bind({});
Default.args = {
  postCaption: 'Ay 7aga',
  type: 'Text Poll',
};
