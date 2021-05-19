import React, { useState } from 'react';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import styles from './TabGroup.module.css';
import Radio from '../../atoms/Radio/index';
import type { ITabGroup } from './types/ITabGroup';

const Tab: FC<ITabGroup.ITabProps> = (props): ReactElement => {
  const { active, id, svg, children } = props;

  const [checkedValue, setCheckedValue] = useState<string>('');

  const radioCheckedHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setCheckedValue(e.currentTarget.value);
  };

  const tabClasses: string = classNames(styles['tab-default'], {
    [styles['tab-active']]: active,
    [styles['tab-in-active']]: !active,
  });

  return (
    <label
      htmlFor={id}
      className={tabClasses}
      // onClick={toggleActiveHandler}
      data-testid="tab"
      // title={active && 'checkedTab'}
    >
      <Radio
        size="small"
        value={checkedValue}
        name="tab groub"
        onChange={radioCheckedHandler}
        id={id}
        defaultChecked={active}
      />
      {svg}
      <span className={styles['tab-type']}>{children}</span>
    </label>
  );
};

export default Tab;
