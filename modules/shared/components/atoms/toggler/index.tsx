import classNames from 'classnames';
import * as React from 'react';
import type { FC, ReactElement } from 'react';
import styles from './Toggler.module.css';
import type { ITogglerTypes } from './TogglerTypes';
/** 
* @example : <Toggler size="sm" id="test" checked={isChecked} onChange={handleTogglerChange} disabled={true} />
* @Parameters size, id, checked and onChange are required for Toggler component to function, The prop disabled is optional.
* @ThingsNeededToBeDoneInParentComponent
const [isChecked,setIsChecked] = useState(false);
cosnt handleTogglerChange = ():void => { setIsChecked(!isChecked) };
*/

const Toggler: FC<ITogglerTypes.IProps> = ({
  size,
  disabled = false,
  checked,
  id,
  onChange,
}): ReactElement => {
  const dynamicToggleBodyClasses = classNames(styles.toggleBodyClasses, {
    [styles.toggleBodyClassesDefault]: size === 'default',
    [styles.toggleBodyClassesSmall]: size === 'sm',
    [styles.toggleBodyClassesCheckedAndEnabled]: checked && !disabled,
    [styles.toggleBodyClassesUncheckedAndEnabled]: !checked && !disabled,
    [styles.toggleBodyClassesSmallUnchecked]: size === 'sm' && !checked,
    [styles.toggleBodyClassesSmallChecked]: size === 'sm' && checked,
    [styles.toggleBodyClassesDefaultUnchecked]: size === 'default' && !checked,
    [styles.toggleBodyClassesDefaultChecked]: size === 'default' && checked,
    [styles.toggleBodyClassesCheckedAndDisabled]: checked && disabled,
    [styles.toggleBodyClassesUncheckedAndDisabled]: !checked && disabled,
  });
  const dynamicCircleClasses = classNames(styles.circleClasses, {
    [styles.circleClassesChecked]: checked,
    [styles.circleClassesUnChecked]: !checked,
    [styles.circleClassesCheckedSmall]: checked && size === 'sm',
    [styles.circleClassesCheckedDefault]: checked && size === 'default',
    [styles.circleClassesSmall]: size === 'sm',
    [styles.circleClassesDefault]: size === 'default',
  });
  const checkBoxInput = classNames('opacity-0 absolute', {
    [styles.checkBoxInputEnabled]: !disabled,
    [styles.checkBoxInputDisabled]: disabled,
  });
  return (
    <>
      <label htmlFor={id} className={dynamicToggleBodyClasses}>
        <input
          onChange={onChange}
          type="checkbox"
          id={id}
          data-testid={id}
          className={checkBoxInput}
          disabled={disabled}
          defaultChecked={checked}
        />
        <div className={dynamicCircleClasses} />
      </label>
    </>
  );
};
export default Toggler;
