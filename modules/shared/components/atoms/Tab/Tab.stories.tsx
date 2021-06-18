import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import styles from './Tab.module.css';
import ImagePoll from '../../icons/imagePoll.svg';
import Tab from './Tab';
import type { ITab } from './ITab';

export default {
  title: 'Atoms/Tab',
  component: Tab,
};

const Template: Story<ITab.IProps> = (args): ReactElement => <Tab {...args} />;
export const tab = Template.bind({});
tab.args = {
  value: 'Image Poll',
  id: 'anyid',
  svg: <ImagePoll className={styles.icon} />,
  checkedValue: 'Mini survey',
  disabled: false,
  onlyLabel: false,
};
