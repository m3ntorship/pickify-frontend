import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import FriendSuggestion from './FriendSuggestion';
import type { IFriendSuggestion } from './IFriendSuggestion';

export default {
  component: FriendSuggestion,
  title: 'Molecules/FriendSuggestion',
  argTypes: {
    profile_pic: {
      control: {
        type: 'text',
      },
    },
    username: {
      control: {
        type: 'text',
      },
    },
    mutualFriends: {
      control: 'number',
    },
  },
};

const Template: Story<IFriendSuggestion.IProps> = (args): ReactElement => (
  <FriendSuggestion {...args} />
);

export const Default = Template.bind({});
Default.args = {
  profilePic: 'https://placeimg.com/640/480/any',
  username: 'Miles, Esther',
  mutualFriends: 2,
};
