import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import UserInfo from './UserInfo';
import type { IUserInfo } from './IUserInfo';

export default {
  title: 'molecules/UserInfo',
  component: UserInfo,
  argTypes: {
    profile_pic: {
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
  isHidden: true,
  name: 'Ahmed Ayoub',
  date: new Date('2021-05-24T23:10:24.114Z'),
};
