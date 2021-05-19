import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import Tab from './Tab';
import type { ITabGroup } from './types/ITabGroup';
import { tabGroupData } from './data';

const TabGroup: FC<ITabGroup.IProps> = (): ReactElement => {
  const [data, setData] = useState(tabGroupData());
  const changeValHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData(
      data.map((item) => {
        if (e.target.id === item.id) {
          return { ...item, value: 'checked' };
        }
        return { ...item, value: 'not-checked' };
      }),
    );
  };
  return (
    <div className="flex items-center">
      {data.map((item) => (
        <Tab
          key={item.id}
          id={item.id}
          svg={item.icon}
          value={item.value}
          changeValHandler={changeValHandler}
        >
          {item.type}
        </Tab>
      ))}
    </div>
  );
};

export default TabGroup;
