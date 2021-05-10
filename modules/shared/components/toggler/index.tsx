import type { FC, ReactElement } from 'react';
import classNames from 'classnames';
import * as React from 'react';
import type { TogglerTypes } from './TogglerTypes';

/**
 * This component's parameters >> size=("sm" | "default") disabled=(boolean) isChecked=(boolean) handleTogglerClick=(that's the function that will be triggered onClick).
 */
const Toggler: FC<TogglerTypes.Props> = ({
  size = 'default',
  disabled = false,
  isChecked = false,
  handleTogglerClick,
}): ReactElement => {
  const toggleBodyClasses = classNames(
    'rounded-full flex items-center cursor-pointer transition duration-100 ease-out border border-transparent focus:outline-none',
    {
      'w-2xl h-6 ': size === 'default',
      'w-7 h-4 ': size === 'sm',
      'bg-primary-shd7 hover:bg-primary-shd6 ': isChecked,
      'bg-grey-shd4 hover:bg-grey-shd3 ': !isChecked,
      'focus:border-grey-shd3': size === 'sm' && !isChecked,
      'focus:border-primary-shd5': size === 'sm' && isChecked,
      'focus:ring-2 focus:ring-grey-shd3': size === 'default' && !isChecked,
      'focus:ring-2 focus:ring-primary-shd5': size === 'default' && isChecked,
      'cursor-not-allowed opacity-25': disabled,
    },
  );

  const circleClasses = classNames(
    'rounded-full transition-all duration-100 ease-in-out',
    {
      'bg-primary transform': isChecked,
      'bg-white': !isChecked,
      'translate-x-2.5': isChecked && size === 'sm',
      'translate-x-4': isChecked && size === 'default',
      'w-2.5 h-2.5 m-2xxs': size === 'sm',
      'w-4 h-4 m-1 ': size === 'default',
    },
  );

  return (
    <button
      data-testid="toggler-test"
      type="button"
      className={toggleBodyClasses}
      onClick={handleTogglerClick}
      disabled={disabled}
    >
      <div className={circleClasses} />
    </button>
  );
};
export default Toggler;
