import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import PostPollModal from './Modal';
import type { IModal } from './IModal';

export default {
  title: 'organisms/PostPollModal',
  component: PostPollModal,
};

const Template: Story<IModal.IProps> = (args): ReactElement => (
  <PostPollModal {...args} />
);
export const Default = Template.bind({});
Default.args = {};
