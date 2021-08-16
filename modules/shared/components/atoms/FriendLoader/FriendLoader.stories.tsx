import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import FriendLoader from './FriendLoader';

export default {
  title: 'Atoms/FriendLoader',
  component: FriendLoader,
  argTypes: {},
};

const Template: Story = (args): ReactElement => <FriendLoader {...args} />;
export const AvatarStory = Template.bind({});
AvatarStory.args = {};
