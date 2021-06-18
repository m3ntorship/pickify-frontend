import React from 'react';
import type { Story, Meta } from '@storybook/react';
import PostFooterCreation from './PostFooterCreation';
import type { IPostFooterCreation } from './IPostFooterCreation';

export default {
  title: 'molecules/PostFooterCreation',
  component: PostFooterCreation,
  argTypes: {},
} as Meta;

const Template: Story<IPostFooterCreation.IProps> = (args) => (
  <PostFooterCreation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  togglerIsChecked: false,
  postButtonIsDisabled: true,
};
