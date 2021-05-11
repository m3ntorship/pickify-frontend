import * as React from 'react';
import type { FC, ReactElement } from 'react';
import className from 'classnames';
import { ReactComponent as DeleteIcon } from '../icons/inputFocus.svg';
import { ReactComponent as ErrorIcon } from '../icons/inputError.svg';
import { ReactComponent as SuccessIcon } from '../icons/inputSuccess.svg';
import { ReactComponent as ArrowDownIcon } from '../icons/inputArrowDown.svg';
import { ReactComponent as HomeIcon } from '../icons/inputHome.svg';
import styles from './TextInput.module.css';
import type { ITextInputs } from './ITextInputs';

const TextInput: FC<ITextInputs.IProps> = ({
  label,
  id,
  variants,
  inputType,
  disabled,
  letter,
  ...props
}): ReactElement => {
  const [hideteIcon, setHideIcon] = React.useState<boolean>(false);
  const [inputVal, setInputVal] = React.useState<string>('');

  const hideIconHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputVal(e.currentTarget.value);
    setHideIcon(true);
  };

  const showIconHandler = (): void => {
    setHideIcon(false);
    setInputVal('');
  };

  const inputClasses: string = className(
    styles['form-input'],
    {
      [styles.error]: variants === 'error',
      [styles.success]: variants === 'success',
    },
    {
      [styles['input-with-right-icon']]: inputType === 'right-icon',
      [styles['input-with-left-icon']]: inputType === 'left-icon',
      [styles['input-with-prefix']]: inputType === 'prefix',
      [styles['input-with-dropdown-prefix']]: inputType === 'prefix-dropdown',
      [styles['input-with-choices']]: inputType === 'choices',
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
          type="text"
          id={id}
          disabled={disabled}
          onChange={hideIconHandler}
          value={inputVal}
          {...(props as unknown)}
        />
        <span className={styles['status-icon']}>
          {variants === 'default' && hideteIcon && inputVal && (
            <DeleteIcon onClick={showIconHandler} />
          )}
          {variants === 'error' && <ErrorIcon />}
          {variants === 'success' && <SuccessIcon />}
        </span>
        <span className={styles['control-icon']}>
          {inputType === 'right-icon' && <ArrowDownIcon />}
          {inputType === 'left-icon' && <HomeIcon />}
          {inputType === 'prefix' && '+20'}
          {inputType === 'prefix-dropdown' && (
            <select
              className="bg-transparent focus:outline-none"
              disabled={disabled}
            >
              <option value="+20">+20</option>
              <option value="+50">+50</option>
            </select>
          )}
          {inputType === 'choices' && <span className="letter">{letter}</span>}
        </span>
      </div>
    </div>
  );
};

export default TextInput;
