import React from 'react';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import styles from './TabGroup.module.css';
import Radio from '../../atoms/Radio/index';
import type { ITabGroup } from './types/ITabGroup';

const Tab: FC<ITabGroup.ITabProps> = (props): ReactElement => {
  const { value, id, svg, children, changeValHandler } = props;

  const tabClasses: string = classNames(styles['tab-default'], {
    [styles['tab-checked']]: value === 'checked',
    [styles['tab-unchecked']]: value === 'not-checked',
  });

  return (
    <label
      htmlFor={id}
      data-value={value}
      className={tabClasses}
      data-testid="tab"
    >
      <Radio
        size="small"
        value={value}
        name="tab groub"
        onChange={changeValHandler}
        id={id}
        defaultChecked={value === 'checked'}
      />
      {svg}
      <span className={styles['tab-type']}>{children}</span>
    </label>
  );
};

export default Tab;
