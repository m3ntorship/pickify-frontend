import React from 'react';
import type { FC, ReactElement } from 'react';
import className from 'classnames';
import DeleteIcon from '../icons/inputFocus.svg';
import ErrorIcon from '../icons/inputError.svg';
import SuccessIcon from '../icons/inputSuccess.svg';
import ArrowDownIcon from '../icons/inputArrowDown.svg';
import HomeIcon from '../icons/inputHome.svg';
import styles from './TextInput.module.css';
import type { ITextInputs } from './types/ITextInputs';
import * as ETextInput from './types/ETextInput';

const TextInput: FC<ITextInputs.IProps> = ({
  label,
  id,
  variants,
  inputType,
  disabled,
  letter,
  ...props
}): ReactElement => {
  const [inputVal, setInputVal] = React.useState<string>('');

  const hideIconHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputVal(e.currentTarget.value);
  };

  const showIconHandler = (): void => {
    setInputVal('');
  };

  const inputClasses: string = className(
    styles['form-input'],
    {
      [styles.error]: variants === ETextInput.Variants.Error,
      [styles.success]: variants === ETextInput.Variants.Success,
    },
    {
      [styles['input-with-right-icon']]:
        inputType === ETextInput.InputType.RightIcon,
      [styles['input-with-left-icon']]:
        inputType === ETextInput.InputType.LeftIcon,
      [styles['input-with-prefix']]: inputType === ETextInput.InputType.Prefix,
      [styles['input-with-dropdown-prefix']]:
        inputType === ETextInput.InputType.PrefixDropdown,
      [styles['input-with-choices']]:
        inputType === ETextInput.InputType.Choices,
    },
  );
  // const inputId = id.trim().split(' ').join('');

  return (
    <div className={styles['form-group']}>
      {label && (
        <label htmlFor={id} className={styles['form-label']}>
          {label}
        </label>
      )}

      <div className={styles['form-control']}>
        <input
          className={inputClasses}
          data-testid="text-input"
          type="text"
          id={id}
          disabled={disabled}
          onChange={hideIconHandler}
          value={inputVal}
          data-variant={variants}
          data-input-type={inputType}
          {...(props as unknown)}
        />
        <span className={styles['status-icon']}>
          {variants === ETextInput.Variants.Default && inputVal && (
            <DeleteIcon onClick={showIconHandler} data-testid="delete-icon" />
          )}
          {variants === ETextInput.Variants.Error && <ErrorIcon />}
          {variants === ETextInput.Variants.Success && <SuccessIcon />}
        </span>
        <span className={styles['control-icon']}>
          {inputType === ETextInput.InputType.RightIcon && <ArrowDownIcon />}
          {inputType === ETextInput.InputType.LeftIcon && <HomeIcon />}
          {inputType === ETextInput.InputType.Prefix && '+20'}
          {inputType === ETextInput.InputType.PrefixDropdown && (
            <select
              className="bg-transparent focus:outline-none"
              disabled={disabled}
            >
              <option value="+20">+20</option>
              <option value="+50">+50</option>
            </select>
          )}
          {inputType === ETextInput.InputType.Choices && (
            <div className="bg-grey-shd7 py-0.5 px-xs rounded-sm">
              <h3 className="text-sm text-grey font-normal leading-snug">
                {letter}
              </h3>
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

export default TextInput;
