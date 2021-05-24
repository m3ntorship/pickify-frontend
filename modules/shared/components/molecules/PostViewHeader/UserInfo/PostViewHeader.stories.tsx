import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import PostViewHeader from './Index';
import type { PostViewHeaderTypes } from './PostViewHeaderTypes';

export default {
  title: 'molecules/PostViewHeader',
  component: PostViewHeader,
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
  },
};

const Template: Story<PostViewHeaderTypes.IProps> = (args): ReactElement => (
  <PostViewHeader {...args} />
);
export const postViewHeader = Template.bind({});
postViewHeader.args = {
  size: 'medium',
  variant: 'filled',
  name: 'Marzouk el akta3',
  date: '2 hours',
};
