import type { ReactElement, FC } from 'react';
import React from 'react';
import classnames from 'classnames';
import styles from './Radio.module.css';
import type { IRadio } from './IRadio';

/** 
 * @Parameters size, name, value, id,  and onChange are required, defaultChecked, label, labelStyle and disabled is optional.
 * @ParentComponentSouldhtHave
   const [checkedValue, setCheckedValue] = useState("");
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
     setCheckedValue(e.target.value)
   }
* @example :<fieldset className="m-4">
              <Radio size="default" name="laptops" id="dell" label="Dell" value="dell" onChange={handleChange}  defaultChecked={true}  />
              <br/>
              <Radio size="default" name="laptops" id="hp" label="HP" value="hp" onChange={handleChange}  />
            </fieldset>
*/

const Radio: FC<IRadio.IProps> = ({
  size,
  name,
  value,
  id,
  defaultChecked = false,
  label,
  labelStyle = 'ml-2',
  disabled = false,
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
    },
  );
  return (
    <>
      <label htmlFor={id} className={styles.radio_container}>
        <input
          type="radio"
          className={radioInputClasses}
          name={name}
          value={value}
          id={id}
          defaultChecked={defaultChecked && !disabled}
          disabled={disabled}
          onChange={onChange}
          data-testid="Radio"
        />
        <div className={radioCustomClasses} />
        <span className={labelStyle}>{label}</span>
      </label>
    </>
  );
};

export default Radio;
