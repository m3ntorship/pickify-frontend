import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import CreateImagePoll from './CreateImagePoll';

export default {
  title: 'organisms/CreateImagePoll',
  component: CreateImagePoll,
};

const Template: Story = (): ReactElement => <CreateImagePoll />;

export const createImagePoll = Template.bind({});
