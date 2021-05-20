import React from 'react';
import type { FC, ReactElement } from 'react';
import Tab from './Tab';
import type { ITabGroup } from './types/ITabGroup';

/**
 * @Props tabsData, setTabsData are required.
 * @ShouldHaveArrayOfDataToPassItToTheComponent
 * import { tabGroupData } from '@modules/shared/components/molecules/TabGroup/data'; // this function should return an array of objects
 * const [tabsData, setTabsData] = useState(tabGroupData());
 * @example :  <TabGroup tabsData={tabsData} setTabsData={setTabsData} />
 * */

const TabGroup: FC<ITabGroup.IProps> = (props): ReactElement => {
  const { tabsData, setTabsData } = props;
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
