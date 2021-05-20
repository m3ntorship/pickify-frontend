import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import UserInfo from './Index';
import type { IUserInfo } from './IUserInfo';

export default {
  title: 'molecules/UserInfo',
  component: UserInfo,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['filled', 'notFilled', 'anonymous'],
      },
    },
    imgSrc: {
      control: {
        type: 'text',
      },
    },
    name: {
      control: {
        type: 'text',
      },
    },
    date: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template: Story<IUserInfo.IProps> = (args): ReactElement => (
  <UserInfo {...args} />
);
export const UserInfoStory = Template.bind({});
UserInfoStory.args = {
  size: 'medium',
  variant: 'filled',
  name: 'Ahmed Ayoub',
  date: '2 hours',
};
