import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import ProfileImagePostLoader from './ProfileImagePostLoader';

export default {
  title: 'Atoms/ProfileImagePostLoader ',
  component: ProfileImagePostLoader,
};

const Template: Story = (args): ReactElement => (
  <ProfileImagePostLoader {...args} />
);
export const Default = Template.bind({});
Default.args = {};
