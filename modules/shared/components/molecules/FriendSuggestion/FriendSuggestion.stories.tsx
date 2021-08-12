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
  profilePic:
    'https://s3-alpha-sig.figma.com/img/443e/6ac0/0864920f73a1963a9015537cae3da88e?Expires=1629676800&Signature=bQGAkd8egMt437a3uVrvuWZhbojvQXv1gT356NyqCL8OGFlYDlZp-~UtHMvqUq8thdWR~v5wsIuxy8l8l8OZIrGZ6tC1U~Fo90xUy529JxeFQuHGzR26XK4fK8ut~MLo6oVyUMYh7cQH0eU4el8nTBt4mWPLigGbpIIt95qVD9wnUaIpG7qyNkBKLtaQXDLuI4pGkQ9urDZBaq9tYVt~uD576PPH~R4v4NF~XHXyeBKNo14KC3DO5zATf~AZystGgqxSZ-XZbru8eJgPaOswzaVy8kk-JHlTzpqU4ABd-M8hC1leUK8OahLfFdDqipZzw00faOJ4iof8pIxjD4PoEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  username: 'Miles, Esther',
  mutualFriends: 2,
};
