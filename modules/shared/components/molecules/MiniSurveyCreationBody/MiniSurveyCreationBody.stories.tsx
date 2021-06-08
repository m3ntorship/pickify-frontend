import React from 'react';
import type { Story, Meta } from '@storybook/react';
import MiniSurveyCreationBody from './MiniSurveyCreationBody';
import type { IMiniSurveyCreationBody } from './IMiniSurveyCreationBody';

export default {
  title: 'Molecules/MiniSurveyCreationBody',
  component: MiniSurveyCreationBody,
} as Meta;

const Template: Story<IMiniSurveyCreationBody.IProps> = (args) => (
  <MiniSurveyCreationBody {...args} />
);

export const Default = Template.bind({});
