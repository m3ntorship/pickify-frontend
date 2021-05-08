import type { FC, ReactElement, ChangeEvent } from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import styles from './Toggler.module.css';
import type { TogglerTypes } from './TogglerTypes';

const Toggler: FC<TogglerTypes.Props> = ({
  id = 'test',
  size = 'default',
  disabled = false,
}): ReactElement => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleClick = (e: ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(e.target.checked);
  };

  const toggleClasses = classNames(styles.toggleBody, {
    [styles.toggleBodySizeSm]: size === 'sm',
    [styles.toggleBodySizeDefault]: size === 'default',
    'bg-primary-shd7 hover:bg-primary-shd6': isChecked,
    'bg-grey-shd4 hover:bg-grey-shd3': !isChecked,
    'cursor-not-allowed opacity-25': disabled,
  });
  const circleClasses = classNames(styles.cyrcle, {
    'bg-primary transform': isChecked,
    'bg-white': !isChecked,
    'translate-x-2.5': isChecked && size === 'sm',
    'translate-x-4': isChecked && size === 'default',
    'w-2.5 h-2.5': size === 'sm',
    'w-4 h-4': size === 'default',
  });
  return (
    <>
      <label htmlFor={id} className={toggleClasses}>
        <input
          type="checkbox"
          name={id}
          id={id}
          className={styles.checkboxInput}
          onChange={handleClick}
          disabled={disabled}
        />
        <div className={circleClasses} />
      </label>
    </>
  );
};
export default Toggler;
