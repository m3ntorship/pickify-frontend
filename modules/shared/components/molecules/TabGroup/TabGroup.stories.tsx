import type { ReactElement } from 'react';
import type { Story } from '@storybook/react';
import TabGroup from './TabGroup';
import type { ITabGroup } from './types/ITabGroup';

export default {
  title: 'Molecules/TabGroup',
  component: TabGroup,
};

const Template: Story<ITabGroup.IProps> = (args): ReactElement => (
  <TabGroup {...args} />
);
export const tabGroup = Template.bind({});
tabGroup.args = {
  onlyLabel: false,
  disabled: false,
};
