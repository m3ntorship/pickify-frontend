import React from 'react';
import type { Story, Meta } from '@storybook/react';
import MiniSurveyCreationBody from './MiniSurveyCreationBody';

export default {
  title: 'Molecules/MiniSurveyCreationBody',
  component: MiniSurveyCreationBody,
} as Meta;

const Template: Story = (args) => <MiniSurveyCreationBody {...args} />;

export const Default = Template.bind({});
