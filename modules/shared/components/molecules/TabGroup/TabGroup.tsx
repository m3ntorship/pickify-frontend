import React from 'react';
import type { FC, ReactElement } from 'react';
import Tab from './Tab';
import type { ITabGroup } from './types/ITabGroup';
import { tabGroupData } from './data';

/**
 * @Props checkedValue setCheckedValue are required, onlyLabel disabled are optional
 * @ShouldHaveInTheParentComponent
 * const [checkedValue, setCheckedValue] = useState('Image Poll');
 * @example :  <TabGroup checkedValue={checkedValue} setCheckedValue={setCheckedValue} />
 * */

const TabGroup: FC<ITabGroup.IProps> = (props): ReactElement => {
  const { onlyLabel, disabled, checkedValue, setCheckedValue } = props;
  const tabsData = tabGroupData();
  const changeValHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCheckedValue(e.target.value);
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
          checkedValue={checkedValue}
          onlyLabel={onlyLabel}
          disabled={disabled}
        >
          {tab.value}
        </Tab>
      ))}
    </div>
  );
};

export default TabGroup;
