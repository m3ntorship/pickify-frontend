import React from 'react';
import type { FC, ReactElement } from 'react';
import styles from './Widget.module.css';

const Widget: FC = ({ children }): ReactElement => {
  return (
    <div className={styles['widget-box']}>
      <p>{children}</p>
    </div>
  );
};

export default Widget;
