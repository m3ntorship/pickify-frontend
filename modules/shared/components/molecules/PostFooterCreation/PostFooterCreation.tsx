import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IPostFooterCreation } from './IPostFooterCreation';
import styles from './PostFooterCreation.module.css';
import Privacy from '../Privacy/Privacy';
import Divider from '../../atoms/Divider/Divider';

/** 
* @Notice you will use the handleChange functions to get and use the value of the toggler and the select
* @ThingsNeededToBeDoneInParentComponent
const [togglerIsChecked,setTogglerIsChecked] = useState(false);
const handleTogglerChange = (e: React.ChangeEvent<HTMLInputElement>):void => { setTogglerIsChecked(e.target.checked) }<Test>;
const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>):void => {console.log(e.target.value)};
*/
const PostFooterCreation: FC<IPostFooterCreation.IProps> = ({
  handleSelectChange,
  togglerIsChecked,
  handleTogglerChange,
  disabled,
}): ReactElement => {
  return (
    <div className={styles.container}>
      <Privacy
        privacyOptions={['friends', 'family']}
        withDivider
        togglerIsChecked={togglerIsChecked}
        handleTogglerChange={handleTogglerChange}
        handleSelectChange={handleSelectChange}
      />
      <button
        disabled={disabled}
        type="button"
        className={styles['primary-button']}
      >
        post
      </button>
      <div className={styles.divider}>
        <Divider type="horizontal" length="auto" />
      </div>

      <div className={styles['responsive-button']}>
        <button
          disabled={disabled}
          type="button"
          className={styles['cancel-responsive-button']}
        >
          cancel
        </button>
        <button
          disabled={disabled}
          type="button"
          className={styles['primary-responsive-button']}
        >
          post
        </button>
      </div>
    </div>
  );
};

export default PostFooterCreation;
