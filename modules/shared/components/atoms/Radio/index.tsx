import React from 'react';
import classnames from 'classnames';
import type { ReactElement, FC } from 'react';
import styles from './Radio.module.css';
import type { IRadio } from './IRadio';

/** 
 * @Parameters size, name, value, id, defaultChecked and onChange are required, onlyLabel, disabled are optional.
 * @ParentComponentShouldHave
   const [checkedValue, setCheckedValue] = useState('dell12'); // set default value here to be defaultChecked or put ''
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
     setCheckedValue(e.target.value)
   }
* @example :  <fieldset className="m-4">
                <div className="flex items-center mb-2">
                  <Radio size="default" name="laptops" id="dell" value="dell12" onChange={handleChange} defaultChecked={checkedValue === 'dell12'} />
                  <label htmlFor="dell">Dell</label>
                </div>
                <div className="flex items-center mb-2">
                  <Radio size="default" name="laptops" id="hp" value="hp12" onChange={handleChange} defaultChecked={checkedValue === 'hp12'}
                  />
                  <label htmlFor="hp">HP</label>
                </div>
              </fieldset>
*/

const Radio: FC<IRadio.IProps> = ({
  size,
  name,
  value,
  id,
  defaultChecked,
  disabled = false,
  onlyLabel,
  onChange,
}): ReactElement => {
  const radioInputClasses = classnames(styles.radio_input, {
    [styles.size_small]: size === 'small',
    [styles.size_default]: size === 'default',
  });
  const radioCustomClasses = classnames(
    styles.radio_background,
    styles.unchecked,
    {
      [styles.size_small]: size === 'small',
      [styles.size_default]: size === 'default',
      [styles.checkmark_small]: size === 'small',
      [styles.checkmark_default]: size === 'default',
      [styles.checked_disabled_default]:
        defaultChecked && disabled && size === 'default',
      [styles.checked_disabled_small]:
        defaultChecked && disabled && size === 'small',
      [styles.unchecked_disabled]: !defaultChecked && disabled,
      [styles.only_label]: onlyLabel,
    },
  );
  return (
    <>
      <div className={styles.radio_container}>
        <input
          type="radio"
          className={radioInputClasses}
          name={name}
          value={value}
          id={id}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange}
          data-testid="Radio"
        />
        <div className={radioCustomClasses} />
      </div>
    </>
  );
};

export default Radio;
