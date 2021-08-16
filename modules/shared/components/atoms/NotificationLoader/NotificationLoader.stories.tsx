import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import NotificationLoader from './NotificationLoader';

export default {
  title: 'Atoms/NotificationLoader',
  component: NotificationLoader,
  argTypes: {},
};

const Template: Story = (args): ReactElement => (
  <NotificationLoader {...args} />
);
export const NotificationLoaderStory = Template.bind({});
NotificationLoaderStory.args = {};
