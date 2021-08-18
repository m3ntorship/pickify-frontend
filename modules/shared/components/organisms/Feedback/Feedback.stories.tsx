import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import Feedback from './Feedback';

export default {
  title: 'organisms/Feedback',
  component: Feedback,
};

const Template: Story = (args): ReactElement => <Feedback {...args} />;
export const Default = Template.bind({});
Default.args = {};
