import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import Modal from './Modal';
import type { IModal } from './IModal';

export default {
  title: 'organisms/Modal',
  component: Modal,
};

const Template: Story<IModal.IProps> = (args): ReactElement => (
  <Modal {...args}>
    <h1>Pickify</h1>
  </Modal>
);
export const Default = Template.bind({});
Default.args = {};
