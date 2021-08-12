import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import TrendingQuestions from './TrendingQuestions';

export default {
  component: TrendingQuestions,
  title: 'Organisms/TrendingQuestions',
};

const Template: Story = (args): ReactElement => <TrendingQuestions {...args} />;

export const Default = Template.bind({});
