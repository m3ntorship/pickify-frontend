import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import UserInfo from './UserInfo';
import type { IUserInfo } from './IUserInfo';

export default {
  title: 'molecules/UserInfo',
  component: UserInfo,
  argTypes: {
    profilePic: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    subTitle: {
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
  title: 'Ahmed Ayoub',
  subTitle: '3 months ago',
  description: '13/08/2021 06:09:11',
};
