import React from 'react';
import type { FC, ReactElement } from 'react';
import Tab from '../../atoms/Tab/Tab';
import type { ITabGroup } from './types/ITabGroup';

/**
 * @Props tabsData, checkedValue setCheckedValue are required
 * @ShouldHaveArrayOfDataToPassItToTheComponent
 * @example :  import { tabGroupData } from '@modules/shared/components/molecules/TabGroup/data'; // this function should return an array of objects
 * const [checkedValue, setCheckedValue] = useState('Image Poll');
 * <TabGroup tabsData={tabGroupData()} checkedValue={checkedValue} setCheckedValue={setCheckedValue} />
 * */

const TabGroup: FC<ITabGroup.IProps> = (props): ReactElement => {
  const { tabsData, checkedValue, setCheckedValue } = props;

  const changeValHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCheckedValue(e.target.value);
  };

  return (
    <div className="flex items-center">
      {tabsData.map((tab) => (
        <div className="mr-xs last:mr-0" key={tab.id}>
          <Tab
            id={tab.id}
            svg={tab.svg}
            value={tab.value}
            changeValHandler={changeValHandler}
            checkedValue={checkedValue}
          />
        </div>
      ))}
    </div>
  );
};

export default TabGroup;
