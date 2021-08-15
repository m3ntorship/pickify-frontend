import React from 'react';
import type { ReactElement } from 'react';
import classNames from 'classnames';
import styles from './Box.module.css';
import type { IBox } from './IBox';
import Divider from '../Divider/Divider';
import * as EDivider from '../Divider/types/EDivider';

const Box = ({
  isGreyColor,
  isWhiteColor,
  children,
}: IBox.IProps): ReactElement => {
  const boxClasses = classNames(styles.box, {
    'bg-grey-bg': isGreyColor,
    'bg-white': isWhiteColor,
  });
  return <div className={boxClasses}>{children}</div>;
};

const BoxDevider = (): ReactElement => {
  return <Divider type={EDivider.DividerType.Horizontal} length="100%" />;
};

const Header = ({ children, withDevider }: IBox.IProps): ReactElement => {
  const headerClasses = classNames(styles['header-wrapper']);
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

const Body = ({ children }: IBox.IProps): ReactElement => {
  return <div>{children}</div>;
};

const Footer = ({ children, withDevider }: IBox.IProps): ReactElement => {
  const footerClasses = classNames(styles['footer-wrapper']);
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
