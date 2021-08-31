import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import Avatar from './Avatar';
import type { IAvatar } from './IAvatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [
          'extra-small',
          'small',
          'medium',
          'large',
          'extra-large',
          'super-large',
        ],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['filled', 'notFilled', 'anonymous'],
      },
    },
    profilePic: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template: Story<IAvatar.IProps> = (args): ReactElement => (
  <Avatar {...args} />
);
export const AvatarStory = Template.bind({});
AvatarStory.args = {
  size: 'large',
  variant: 'filled',
  profilePic: 'https://placeimg.com/640/480/any',
};
