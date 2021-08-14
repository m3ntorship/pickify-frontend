import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import ProfileUserLoader from './ProfileUserLoader';

export default {
  title: 'Atoms/ProfileUserLoader',
  component: ProfileUserLoader,
};

const Template: Story = (args): ReactElement => <ProfileUserLoader {...args} />;
export const Default = Template.bind({});
Default.args = {};
