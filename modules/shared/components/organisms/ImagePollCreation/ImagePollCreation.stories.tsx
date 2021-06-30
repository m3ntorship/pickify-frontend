import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import ImagePollCreation from './ImagePollCreation';

export default {
  title: 'organisms/CreateImagePoll',
  component: ImagePollCreation,
};

const Template: Story = (): ReactElement => <ImagePollCreation />;

export const createImagePoll = Template.bind({});
