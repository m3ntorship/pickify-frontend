import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import FriendSuggestions from './FriendSuggestions';

export default {
  component: FriendSuggestions,
  title: 'Organisms/FriendsSuggestions',
};

const Template: Story = (args): ReactElement => <FriendSuggestions {...args} />;

export const Default = Template.bind({});
