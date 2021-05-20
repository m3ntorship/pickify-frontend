import type { ReactElement } from 'react';
import TabGroup from './TabGroup';
import { tabGroupData } from './data';

export default {
  title: 'Molecules/TabGroup',
  component: TabGroup,
};

export const TSTabGroup = (): ReactElement => (
  <TabGroup
    tabsData={tabGroupData()}
    setTabsData={(): string => 'empty function'}
  />
);
