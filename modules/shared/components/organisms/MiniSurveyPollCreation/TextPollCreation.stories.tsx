import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import MiniSurveyPollCreation from './MiniSurveyPollCreation';
import type { IMiniSurveyPollCreation } from './IMiniSurveyPollCreation';

export default {
  title: 'organisms/MiniSurveyPollCreation',
  component: MiniSurveyPollCreation,
};

const Template: Story<IMiniSurveyPollCreation.IProps> = (
  args,
): ReactElement => <MiniSurveyPollCreation {...args} />;
export const Default = Template.bind({});
Default.args = {};
