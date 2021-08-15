import React from 'react';
import type { ReactElement } from 'react';
import classNames from 'classnames';
import styles from './Box.module.css';
import type { IBox } from './IBox';
import Divider from '../Divider/Divider';
import * as EDivider from '../Divider/types/EDivider';

const Box = ({
  classes,
  isGreyColor,
  isWhiteColor,
  children,
}: IBox.IProps): ReactElement => {
  const boxClasses = classNames(
    styles.box,
    {
      'bg-grey-bg': isGreyColor,
      'bg-white': isWhiteColor,
    },
    classes,
  );
  return <div className={boxClasses}>{children}</div>;
};

const BoxDevider = (): ReactElement => {
  return <Divider type={EDivider.DividerType.Horizontal} length="100%" />;
};

const Header = ({
  classes,
  children,
  withDevider,
}: IBox.IProps): ReactElement => {
  const headerClasses = classNames(styles['header-wrapper'], classes);
  return (
    <div className={headerClasses}>
      <div className={styles.header}>{children}</div>
      {withDevider && (
        <div className="mt-3">
          <BoxDevider />
        </div>
      )}
    </div>
  );
};

const Body = ({ classes, children }: IBox.IProps): ReactElement => {
  const bodyClasses = classNames(classes);
  return <div className={bodyClasses}>{children}</div>;
};

const Footer = ({
  classes,
  children,
  withDevider,
}: IBox.IProps): ReactElement => {
  const footerClasses = classNames(styles['footer-wrapper'], classes);
  return (
    <div className={footerClasses}>
      {withDevider && (
        <div className="mb-4">
          <BoxDevider />
        </div>
      )}
      <div className={styles.footer}>{children}</div>
    </div>
  );
};

Box.Header = Header;
Box.Body = Body;
Box.Footer = Footer;

export default Box;
