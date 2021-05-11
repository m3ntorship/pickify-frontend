import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import classNames from 'classnames';
import type { ICheckbox } from './ICheckbox';
import CheckBoxSvg from './CheckBoxSvg';

const CHECKBOX = {
  SIZE: {
    DEFAULT: 'Default',
    SMALL: 'Small',
  },
};

const Checkbox: FC<ICheckbox.ICheckBoxProps> = ({
  disabled = false,
  size = 'Default',
  onClick,
}): ReactElement => {
  const [isChecked, setIsChecked] = useState(false);

  const checkBoxSvgHeight = size === CHECKBOX.SIZE.DEFAULT ? '9' : '7';
  const checkBoxSvgWidth = size === CHECKBOX.SIZE.DEFAULT ? '11' : '8';

  const labelStyle = classNames({
    'relative flex justify-center  items-center': true,
    'cursor-pointer': !disabled,
    'w-l h-l': size === CHECKBOX.SIZE.DEFAULT,
    'w-m h-m': size === CHECKBOX.SIZE.SMALL,
  });

  const checkedInputStyle = classNames({
    'appearance-none outline-none rounded-sm text-white align-baseline bg-primary': true,
    'border border-grey-shd4 focus:border-2 focus:border-primary-shd6 cursor-pointer': !disabled,
    'bg-primary-shd7': disabled,
    'w-l h-l': size === CHECKBOX.SIZE.DEFAULT,
    'w-m h-m': size === CHECKBOX.SIZE.SMALL,
  });

  const unCheckedInputStyle = classNames({
    'appearance-none outline-none border border-grey-shd4 rounded-sm text-white align-baseline': true,
    'hover:border hover:border-grey-shd1 cursor-pointer focus:border-2 focus:border-grey-shd2': !disabled,
    'border border-grey-shd6': disabled,
    'w-l h-l': size === CHECKBOX.SIZE.DEFAULT,
    'w-m h-m': size === CHECKBOX.SIZE.SMALL,
  });
  return (
    <>
      {isChecked ? (
        <label htmlFor="checked" className={labelStyle}>
          <input
            className={checkedInputStyle}
            id="checked"
            type="checkbox"
            onChange={(e): void => {
              setIsChecked(e.currentTarget.checked);
            }}
            onClick={onClick}
            data-testid="input-test"
            checked={isChecked}
            disabled={disabled}
          />
          <CheckBoxSvg
            className="absolute"
            height={checkBoxSvgHeight}
            width={checkBoxSvgWidth}
          />
        </label>
      ) : (
        <label htmlFor="unchecked" className={labelStyle}>
          <input
            className={unCheckedInputStyle}
            type="checkbox"
            id="unchecked"
            onChange={(e): void => {
              setIsChecked(e.currentTarget.checked);
            }}
            onClick={onClick}
            data-testid="input-test"
            disabled={disabled}
            checked={isChecked}
          />
        </label>
      )}
    </>
  );
};

export default Checkbox;
