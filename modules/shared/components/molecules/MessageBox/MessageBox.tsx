import React from 'react';
import className from 'classnames';
import type { FC, ReactElement } from 'react';
import ErrorIcon from '../../icons/errorIcon.svg';
import SuccessIcon from '../../icons/successIcon.svg';
import styles from './MessageBox.module.css';
import type { IMessageBoxType } from './types/IMessageBox';
import * as EMessageBoxType from './types/EMessageBox';

const MessageBox: FC<IMessageBoxType.IProps> = ({
  type,
  msg = 'Message!',
  subMsg = 'Description',
}): ReactElement => {
  const boxWrapper: string = className({
    [styles['success-box']]: type === EMessageBoxType.MessageBoxType.Success,
    [styles['error-box']]: type === EMessageBoxType.MessageBoxType.Error,
  });

  return (
    <div className={boxWrapper} data-testid="misc-box">
      {type === EMessageBoxType.MessageBoxType.Success ? <SuccessIcon /> : null}
      {type === EMessageBoxType.MessageBoxType.Error ? <ErrorIcon /> : null}
      <div className={styles['msg-box']}>
        <h3 className={styles.msg}>{msg}</h3>
        <p className={styles['sub-msg']} data-testid="sub-msg">
          {subMsg}
        </p>
      </div>
    </div>
  );
};

export default MessageBox;
