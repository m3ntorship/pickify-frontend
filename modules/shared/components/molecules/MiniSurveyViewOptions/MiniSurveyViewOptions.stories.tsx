import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import MiniSurveyViewOptions from './MiniSurveyViewOptions';
import type { IMiniSurveyViewOptions } from './IMiniSurveyViewOptions';
import { optionsGroups } from './data';

export default {
  title: 'Molecules/MiniSurveyViewOptions',
  component: MiniSurveyViewOptions,
  argTypes: {},
};

const Template: Story<IMiniSurveyViewOptions.IProps> = (args): ReactElement => (
  <MiniSurveyViewOptions {...args} />
);
export const Default = Template.bind({});
Default.args = {
  optionsGroups,
};
