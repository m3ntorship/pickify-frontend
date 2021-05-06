import type { FC, ReactElement } from 'react';
import styles from './Heading.module.css';
import type { IHeading } from './IHeading';

const Heading: FC<IHeading.IProps> = ({ text }): ReactElement => {
  return <h2 className={styles.text_red}> {text}</h2>;
};
export default Heading;
