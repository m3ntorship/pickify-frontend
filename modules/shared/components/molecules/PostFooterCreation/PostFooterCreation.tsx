import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import type { IPostFooterCreation } from './IPostFooterCreation';
import styles from './PostFooterCreation.module.css';
import Privacy from '../Privacy/Privacy';
import Divider from '../../atoms/Divider/Divider';

const PostFooterCreation: FC<IPostFooterCreation.IProps> = ({
  handleSelectChange,
}): ReactElement => {
  const [togglerIsChecked, setTogglerIsChecked] = useState(false);
  const handleTogglerChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setTogglerIsChecked(e.target.checked);
  };

  return (
    <div className={styles.container}>
      <Privacy
        privacyOptions={['friends', 'family']}
        withDivider
        togglerIsChecked={togglerIsChecked}
        handleTogglerChange={handleTogglerChange}
        handleSelectChange={handleSelectChange}
      />
      <button type="button" className={styles['primary-button']}>
        post
      </button>
      <div className={styles.divider}>
        <Divider type="horizontal" length="auto" />
      </div>

      <div className={styles['responsive-button']}>
        <button type="button" className={styles['cancel-responsive-button']}>
          cancel
        </button>
        <button type="button" className={styles['primary-responsive-button']}>
          post
        </button>
      </div>
    </div>
  );
};

export default PostFooterCreation;
