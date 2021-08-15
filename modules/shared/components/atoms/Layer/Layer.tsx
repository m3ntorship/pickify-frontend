import React from 'react';
import type { ReactElement } from 'react';
import classNames from 'classnames';
import styles from './Layer.module.css';
import type { ILayer } from './ILayer';
import Divider from '../Divider/Divider';
import * as EDivider from '../Divider/types/EDivider';

const Layer = ({
  classes,
  isGreyColor,
  isWhiteColor,
  children,
}: ILayer.IProps): ReactElement => {
  const layerClasses = classNames(
    styles.layer,
    {
      'bg-grey-bg': isGreyColor,
      'bg-white': isWhiteColor,
    },
    classes,
  );
  return <div className={layerClasses}>{children}</div>;
};

const LayerDevider = (): ReactElement => {
  return <Divider type={EDivider.DividerType.Horizontal} length="100%" />;
};

const Header = ({
  classes,
  children,
  withDevider,
}: ILayer.IProps): ReactElement => {
  const headerClasses = classNames(styles['header-wrapper'], classes);
  return (
    <div className={headerClasses}>
      <div className={styles.header}>{children}</div>
      {withDevider && (
        <div className="mt-3">
          <LayerDevider />
        </div>
      )}
    </div>
  );
};

const Body = ({ classes, children }: ILayer.IProps): ReactElement => {
  const bodyClasses = classNames(classes);
  return <div className={bodyClasses}>{children}</div>;
};

const Footer = ({
  classes,
  children,
  withDevider,
}: ILayer.IProps): ReactElement => {
  const footerClasses = classNames(styles['footer-wrapper'], classes);
  return (
    <div className={footerClasses}>
      {withDevider && (
        <div className="mb-4">
          <LayerDevider />
        </div>
      )}
      <div className={styles.footer}>{children}</div>
    </div>
  );
};

Layer.Header = Header;
Layer.Body = Body;
Layer.Footer = Footer;

export default Layer;
