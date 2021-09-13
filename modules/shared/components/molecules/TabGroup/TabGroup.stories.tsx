import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import TabGroup from './TabGroup';
import type { ITabGroup } from './ITabGroup';
import { postCreationTabGroupData } from './data';

export default {
  title: 'Molecules/TabGroup',
  component: TabGroup,
  argTypes: {
    checkedValue: {
      options: ['image poll', 'text poll', 'mini survey'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<ITabGroup.IProps> = (args): ReactElement => (
  <TabGroup {...args} />
);
export const tabGroup = Template.bind({});
tabGroup.args = {
  tabsData: postCreationTabGroupData(),
  onlyLabel: false,
};
