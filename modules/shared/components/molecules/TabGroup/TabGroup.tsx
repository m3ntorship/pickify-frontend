import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import Tab from './Tab';
import type { ITabGroup } from './types/ITabGroup';
import { tabGroupData } from './data';

/**
 * @Props tabsData, setTabsData are required.
 * @ShouldHaveArrayOfDataToPassItToTheComponent
 * import { tabGroupData } from '@modules/shared/components/molecules/TabGroup/data'; // this function should return an array of objects
 * const [tabsData, setTabsData] = useState(tabGroupData());
 * @example :  <TabGroup tabsData={tabsData} setTabsData={setTabsData} />
 * */

const TabGroup: FC<ITabGroup.IProps> = (): ReactElement => {
  const [tabsData, setTabsData] = useState(tabGroupData());
  const changeValHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTabsData(
      tabsData.map((tab) => {
        if (e.target.id === tab.id) {
          return { ...tab, value: 'checked' };
        }
        return { ...tab, value: 'not-checked' };
      }),
    );
  };
  return (
    <div className="flex items-center">
      {tabsData.map((tab) => (
        <Tab
          key={tab.id}
          id={tab.id}
          svg={tab.svg}
          value={tab.value}
          changeValHandler={changeValHandler}
        >
          {tab.children}
        </Tab>
      ))}
    </div>
  );
};

export default TabGroup;
