import React from 'react';
import type { FC, ReactElement } from 'react';
import Link from 'next/link';
import { footerData } from './footerData';
import styles from './Footer.module.css';
import type { IFooter } from './IFooter';

const Footer: FC<IFooter.IProps> = ({ showCenteredLogo }): ReactElement => {
  return (
    <footer className={styles.footer}>
      <ul className={styles['list-parent']}>
        {footerData.map((footerItem) => {
          return (
            <li className={styles['link-item']} key={footerItem.content}>
              <Link href={footerItem.path}>
                <a className={styles.link}>{footerItem.content}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      {!showCenteredLogo && (
        <div className="mt-2">
          <h3 className={styles['copy-rights']}>Pikcify © 2021</h3>
        </div>
      )}
      <div>
        {showCenteredLogo && (
          <div className="text-center mt-4">
            <h3 className={styles['copy-rights']}>Pikcify © 2021</h3>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
