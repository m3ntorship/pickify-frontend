import React from 'react';
import type { Story, Meta } from '@storybook/react';
import PostFooter from './PostFooter';
import type { IPostFooter } from './IPostFooter';

export default {
  title: 'molecules/PostFooter',
  component: PostFooter,
  argTypes: {},
} as Meta;

const Template: Story<IPostFooter.IProps> = (args) => (
  <div className="flex justify-between">
    <PostFooter {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
