import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import MiniSurveyPollCreation from './MiniSurveyPollCreation';

export default {
  title: 'organisms/MiniSurveyPollCreation',
  component: MiniSurveyPollCreation,
};

const Template: Story = (args): ReactElement => (
  <MiniSurveyPollCreation {...args} />
);
export const Default = Template.bind({});
Default.args = {};
