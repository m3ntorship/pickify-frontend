import React from 'react';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import Toggler from '../../atoms/toggler';
import type { IPrivacy } from './PrivacyTypes';
import styles from './Privacy.module.css';
import Divider from '../../atoms/Divider/Divider';
/** 
* @example : <Privacy privacyOptions={["friends","family"]} withDivider togglerIsChecked={togglerIsChecked} handleTogglerChange={handleTogglerChange} handleSelectChange={handleSelectChange} />
* @Parameters privacyOptions, withDivider, togglerIsChecked, handleTogglerChange and handleSelectChange are required for Toggler component to function, The prop togglerLabel and privacySelectorLabel is optional.
* @Notice you will use the handleChange functions to get and use the value of the toggler and the select
* @ThingsNeededToBeDoneInParentComponent
const [togglerIsChecked,setTogglerIsChecked] = useState(false);
const handleTogglerChange = (e: React.ChangeEvent<HTMLInputElement>):void => { setTogglerIsChecked(e.target.checked) }<Test>;
const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>):void => {console.log(e.target.value)};
*/
const Privacy: FC<IPrivacy.IProps> = ({
  togglerLabel = 'Hide my identity',
  privacySelectorLabel = 'Privacy:',
  privacyOptions,
  withDivider,
  togglerIsChecked,
  handleTogglerChange,
  handleSelectChange,
}): ReactElement => {
  const privacySelectorContainer = classNames(styles.privacySelectorContainer, {
    [styles.privacySelectorContainerWithoutDivider]: !withDivider,
  });
  return (
    <div className={styles.privacyContainer}>
      <div className={styles.hideMyIdentityContainer}>
        <Toggler
          size="sm"
          id="hideMyIdentityToggler"
          checked={togglerIsChecked}
          onChange={handleTogglerChange}
        />
        <span className={styles.hideMyIdentityText}>{togglerLabel}</span>
      </div>
      {withDivider && (
        <div data-testid="dividerTestId" className={styles.divider}>
          <Divider type="vertical" length="16px" />
        </div>
      )}
      <div className={privacySelectorContainer}>
        <span className={styles.privacySelectorText}>
          {privacySelectorLabel}
        </span>
        <select
          data-testid="selectTestId"
          onChange={handleSelectChange}
          className={styles.privacySelector}
        >
          {privacyOptions.map((option) => {
            return (
              <option
                key={option}
                data-testid={option}
                className={styles.privacySelectorOptions}
                value={option}
              >
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Privacy;
