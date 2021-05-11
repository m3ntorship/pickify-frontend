import type { FC, ReactElement } from 'react';
import classNames from 'classnames';
import * as React from 'react';
import type { TogglerTypes } from './TogglerTypes';
/** 
* @example : <Toggler size="sm" checked={isChecked} onChange={handleTogglerChange} disabled={true} />
* @Parameters size, checked and onChange are required for Toggler component to function, The prop disabled is optional.
* @ThingsNeededToBeDoneInParentComponent
const [isChecked,setIsChecked] = useState(false);
cosnt handleTogglerChange = () => { setIsChecked(!isChecked) };
*/

const Toggler: FC<TogglerTypes.Props> = ({
  size,
  disabled = false,
  checked,
  id,
  onChange,
}): ReactElement => {
  const toggleBodyClasses = classNames(
    'rounded-full flex items-center cursor-pointer transition duration-100 ease-out focus:outline-none relative',
    {
      'w-2xl h-6 ': size === 'default',
      'w-7 h-4 ': size === 'sm',
      'bg-primary-shd7 hover:bg-primary-shd6 ': checked,
      'bg-grey-shd4 hover:bg-grey-shd3 ': !checked,
      'focus-within:ring-1 focus-within:ring-grey-shd3':
        size === 'sm' && !checked,
      'focus-within:ring-1 focus-within:ring-primary-shd5':
        size === 'sm' && checked,
      'focus-within:ring-2 focus-within:ring-grey-shd3':
        size === 'default' && !checked,
      'focus-within:ring-2 focus-within:ring-primary-shd5':
        size === 'default' && checked,
      'cursor-not-allowed opacity-25': disabled,
    },
  );
  const circleClasses = classNames(
    'rounded-full transition-all duration-100 ease-in-out',
    {
      'bg-primary transform': checked,
      'bg-white': !checked,
      'translate-x-3': checked && size === 'sm',
      'translate-x-sm': checked && size === 'default',
      'w-2.5 h-2.5 m-2xxs': size === 'sm',
      'w-4 h-4 m-1 ': size === 'default',
    },
  );
  const checkBoxInput = classNames('opacity-0 absolute', {
    'cursor-pointer': !disabled,
    'cursor-not-allowed': disabled,
  });
  return (
    <>
      <label htmlFor={id} className={toggleBodyClasses}>
        <input
          onChange={onChange}
          type="checkbox"
          id={id}
          className={checkBoxInput}
          disabled={disabled}
        />
        <div className={circleClasses} />
      </label>
    </>
  );
};
export default Toggler;
