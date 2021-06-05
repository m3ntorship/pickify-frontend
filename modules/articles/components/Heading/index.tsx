import * as React from 'react';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import styles from './Heading.module.css';
import type { IHeading } from './IHeading';

const Heading: FC<IHeading.IProps> = ({ text, toBeRed }): ReactElement => {
  const h2Class: string = classNames({
    [styles.text_red]: toBeRed,
  });
  return (
    <h2 className={h2Class} data-testid="h2-element">
      {' '}
      {text}
      <p className={styles.btn}>sdsads</p>
      <p className="text-8xl">ali</p>
    </h2>
  );
};
export default Heading;
