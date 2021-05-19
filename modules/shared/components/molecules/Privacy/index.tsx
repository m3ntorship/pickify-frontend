import React from 'react';
import classNames from 'classnames';
import Toggler from '../../atoms/toggler';
import type { FC, ReactElement } from 'react';
import type { PrivacyTypes } from './PrivacyTypes';
import styles from './Privacy.module.css';

const Privacy: FC<PrivacyTypes.Props> = ({
  privacyOptions,
  withDivider,
  togglerIsChecked,
  handleTogglerChange,
  handleSelectChange,
}): ReactElement => {
  const privacySelectorContainer = classNames(styles.privacySelectorContainer, {
    [styles.privacySelectorContainerWithoutDivider]: !withDivider,
  });
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ TEMPORARY SECTION START @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // console.log(
  //   'temporary log',
  //   handleTogglerChange,
  //   handleSelectChange,
  //   togglerIsChecked,
  // );

  // const [togglerIsCheckedTest, setTogglerIsCheckedTest] = useState(false);
  // const handleTogglerChangeTest = (): void => {
  //   setTogglerIsCheckedTest(!togglerIsCheckedTest);
  // };
  // const handleSelectChangeTest = (
  //   e: React.ChangeEvent<HTMLSelectElement>,
  // ): void => {
  //   console.log(e.target.value);
  // };
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ TEMPORARY SECTION End @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  return (
    <div className={styles.privacyContainer}>
      <div className={styles.hideMyIdentityContainer}>
        <Toggler
          size="sm"
          id="hideMyIdentityToggler"
          checked={togglerIsChecked}
          onChange={handleTogglerChange}
        />
        <span className={styles.hideMyIdentityText}>Hide My Identity</span>
      </div>
      {withDivider && (
        <div data-testid="dividerTestId" className={styles.divider} />
      )}
      <div className={privacySelectorContainer}>
        <span className={styles.privacySelectorText}>Privacy:</span>
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
