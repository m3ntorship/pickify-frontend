import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import Tab from './Tab';
import type { ITabGroup } from './types/ITabGroup';
import { tabGroupData } from './data';

const TabGroup: FC<ITabGroup.IProps> = (): ReactElement => {
  const [data, setData] = useState(tabGroupData());
  const toggleActiveHandler = (id: string): void => {
    setData(
      data.map((item) => {
        if (id === item.id) {
          return { ...item, active: true };
        }
        return { ...item, active: false };
      }),
    );
  };
  return (
    <div className="flex items-center">
      {data.map((item) => (
        <Tab
          toggleActiveHandler={(): void => {
            toggleActiveHandler(item.id);
          }}
          key={item.id}
          id={item.id}
          svg={item.icon}
          active={item.active}
        >
          {item.type}
        </Tab>
      ))}
    </div>
  );
};

export default TabGroup;
