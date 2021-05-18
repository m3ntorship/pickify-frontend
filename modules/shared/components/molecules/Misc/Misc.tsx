import React from 'react';
import className from 'classnames';
import type { FC, ReactElement } from 'react';
import ErrorIcon from '../../icons/miscError.svg';
import SuccessIcon from '../../icons/miscSuccess.svg';
import styles from './Misc.module.css';
import type { IMisc } from './types/IMisc';
import * as EMisc from './types/EMisc';

const Misc: FC<IMisc.IProps> = ({ type, msg, subMsg }): ReactElement => {
  const classes: string = className({
    [styles['success-box']]: type === EMisc.MiscType.Success,
    [styles['error-box']]: type === EMisc.MiscType.Error,
  });

  return (
    <div className={classes}>
      {type === EMisc.MiscType.Success ? <SuccessIcon /> : null}
      {type === EMisc.MiscType.Error ? <ErrorIcon /> : null}
      <div className={styles['msg-box']}>
        <h3 className={styles.msg}>{msg}</h3>
        <p className={styles['sub-msg']}>{subMsg}</p>
      </div>
    </div>
  );
};

export default Misc;
