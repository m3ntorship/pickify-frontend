import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import ProfileTextPostLoader from './ProfileTextPostLoader';

export default {
  title: 'Atoms/ProfileTextPostLoader ',
  component: ProfileTextPostLoader,
};

const Template: Story = (args): ReactElement => (
  <ProfileTextPostLoader {...args} />
);
export const Default = Template.bind({});
Default.args = {};
