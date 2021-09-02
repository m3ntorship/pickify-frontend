import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import styles from './Tab.module.css';
import ImagePoll from '../../icons/imagePoll.svg';
import Tab from './Tab';
import type { ITab } from './ITab';

export default {
  title: 'Atoms/Tab',
  component: Tab,
  argTypes: {
    checkedValue: {
      options: ['image poll', 'text poll', 'mini survey'],
      control: { type: 'select' },
    },
    value: {
      options: ['image poll', 'text poll', 'mini survey'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<ITab.IProps> = (args): ReactElement => (
  <Tab {...args}>Image Poll</Tab>
);
export const tab = Template.bind({});
tab.args = {
  value: 'image poll',
  id: 'anyid',
  svg: <ImagePoll className={styles.icon} />,
  checkedValue: 'image poll',
  disabled: false,
  onlyLabel: false,
  content: 'Image Poll',
};
