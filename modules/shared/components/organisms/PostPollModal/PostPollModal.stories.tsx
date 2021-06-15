import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import PostPollModal from './PostPollModal';

export default {
  title: 'organisms/PostPollModal',
  component: PostPollModal,
};

const Template: Story = (args): ReactElement => <PostPollModal {...args} />;
export const Default = Template.bind({});
Default.args = {};
