import React from 'react';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import styles from './Tab.module.css';
import Radio from '../Radio/index';
import type { ITab } from './ITab';

const Tab: FC<ITab.IProps> = (props): ReactElement => {
  const {
    value,
    id,
    svg,
    checkedValue,
    changeValHandler,
    disabled,
    onlyLabel,
  } = props;

  const tabClasses: string = classNames(styles['tab-default'], {
    [styles['tab-checked']]: value === checkedValue,
    [styles['tab-unchecked']]: value !== checkedValue,
    [styles['tab-disabled']]: disabled,
  });

  let content = 'Image Poll';

  if (value === 'image poll') {
    content = 'Image Poll';
  } else if (value === 'text poll') {
    content = 'Text Poll';
  } else {
    content = 'Mini survey';
  }

  return (
    <div className="flex">
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
          disabled={disabled}
          defaultChecked={checkedValue === value}
          onlyLabel={onlyLabel}
        />
        {!onlyLabel && svg}
        <span className={styles['tab-type']}>{content}</span>
      </label>
    </div>
  );
};

export default Tab;
