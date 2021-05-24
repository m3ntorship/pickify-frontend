import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import PostViewFooter from './Index';
import type { PostViewFooterTypes } from './PostViewFooterTypes';

export default {
  title: 'molecules/PostViewFooter',
  component: PostViewFooter,
};

const Template: Story<PostViewFooterTypes.IProps> = (args): ReactElement => (
  <PostViewFooter {...args} />
);
export const postViewFooter = Template.bind({});
postViewFooter.args = {
  voters: 35432,
  votersPlaceHolder: 'Vote to uncover the total number of voters',
};
