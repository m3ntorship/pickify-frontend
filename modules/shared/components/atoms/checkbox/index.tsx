import React, { useState } from 'react';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import type { ICheckbox } from './types/ICheckbox';
import CheckMarkDefault from '../../icons/checkMarkDefault.svg';
import CheckMarkSmall from '../../icons/checkMarkSmall.svg';
import * as ECheckbox from './types/ECheckbox';
import styles from './CheckBox.module.css';

const Checkbox: FC<ICheckbox.IProps> = ({
  disabled = false,
  size = 'Default',
  onMockClick,
}): ReactElement => {
  const [isChecked, setIsChecked] = useState(false);

  const labelStyle = classNames({
    [styles.label]: true,
    [styles['label-undisabled']]: !disabled,
    [styles['size-default']]: size === ECheckbox.Size.Default,
    [styles['size-small']]: size === ECheckbox.Size.Small,
  });

  const inputStyle = classNames({
    [styles['input-checked']]: isChecked,
    [styles['input-checked-undisabled']]: !disabled && isChecked,
    [styles['input-checked-disabled']]: disabled && isChecked,
    [styles['input-unchecked']]: !isChecked,
    [styles['input-unchecked-undisabled']]: !disabled && !isChecked,
    [styles['input-unchecked-disabled']]: disabled && !isChecked,
    [styles['size-default']]: size === ECheckbox.Size.Default,
    [styles['size-small']]: size === ECheckbox.Size.Small,
  });

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    setIsChecked(e.currentTarget.checked);
  };

  return (
    <>
      <label htmlFor="checkbox" className={labelStyle}>
        <input
          className={inputStyle}
          id="checkbox"
          type="checkbox"
          onChange={onChangeHandler}
          onClick={onMockClick}
          checked={isChecked}
          data-testid="input-test"
          disabled={disabled}
        />
        {isChecked && size === ECheckbox.Size.Default && (
          <div className="absolute">
            <CheckMarkDefault />
          </div>
        )}
        {isChecked && size === ECheckbox.Size.Small && (
          <div className="absolute">
            <CheckMarkSmall />
          </div>
        )}
      </label>
    </>
  );
};

export default Checkbox;
