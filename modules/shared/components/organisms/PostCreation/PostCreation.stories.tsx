import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import PostCreation from './PostCreation';

export default {
  title: 'organisms/PostCreation',
  component: PostCreation,
};

const Template: Story = (args): ReactElement => <PostCreation {...args} />;
export const Default = Template.bind({});
Default.args = {};
