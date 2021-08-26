import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import ImgWithInfo from './ImgWithInfo';
import type { IImgWithInfo } from './IImgWithInfo';

export default {
  title: 'molecules/ImgWithInfo',
  component: ImgWithInfo,
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

const Template: Story<IImgWithInfo.IProps> = (args): ReactElement => (
  <ImgWithInfo {...args} />
);
export const ImgWithInfoStory = Template.bind({});
ImgWithInfoStory.args = {
  isHidden: true,
  title: 'Ahmed Ayoub',
  subTitle: '3 months ago',
  description: '13/08/2021 06:09:11',
  variant: 'avatar',
};
