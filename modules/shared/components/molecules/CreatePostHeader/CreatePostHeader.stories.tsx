import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import CreatePostHeader from './CreatePostHeader';
import type { ICreatePostHeader } from './ICreatePostHeader';
import { postCreationTabGroupData } from '../TabGroup/data';

export default {
  title: 'Molecules/CreatePostHeader',
  component: CreatePostHeader,
  argTypes: {
    checkedValue: {
      options: ['Image Poll', 'Text Poll', 'Mini survey'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<ICreatePostHeader.IProps> = (args): ReactElement => (
  <CreatePostHeader {...args} />
);
export const createPostHeader = Template.bind({});
createPostHeader.args = {
  tabsData: postCreationTabGroupData(),
  profilePic: 'https://source.unsplash.com/random',
};
