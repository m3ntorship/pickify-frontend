import React from 'react';
import type { FC, ReactElement } from 'react';
import styles from './LoaderMessage.module.css';

const LoaderMessage: FC = ({ children }): ReactElement => {
  return <h1 className={styles.message}>{children}</h1>;
};

export default LoaderMessage;
