import React from 'react';
import type { FC, ReactElement } from 'react';
import { setUser } from '../../../logic/userId/userId';
import styles from './Navigation.module.css';
import type { INavigation } from './INavigation';
import HomeIcon from '../../icons/home.svg';
import FriendsIcon from '../../icons/friends.svg';
import BillIcon from '../../icons/bill.svg';
import HelpIcon from '../../icons/help.svg';
import HappyIcon from '../../icons/happy.svg';
import Avatar from '../../atoms/Avatar/Avatar';
import Divider from '../../atoms/Divider/Divider';
import MenuIcon from '../../icons/menu.svg';
import { DividerType } from '../../atoms/Divider/types/EDivider';

const Navigation: FC<INavigation.IProps> = (props): ReactElement => {
  const { profilePic } = props;
  const avatarVariant = profilePic ? 'filled' : 'notFilled';
  return (
    <nav className={styles['navigation-wrapper']}>
      <div className={styles.navigation}>
        <div className="brand-name-container">
          <h1 className={styles['brand-name']}>Pickify</h1>
        </div>
        <div className={styles['nav-links-container']}>
          <div className={styles['home-nav-links']}>
            <ul>
              <li>
                <HomeIcon />
              </li>
              <li>
                <FriendsIcon />
              </li>
              <li>
                <BillIcon />
              </li>
              <li>
                <MenuIcon className={styles['menu-icon']} />
              </li>
            </ul>
          </div>
          <div className={styles['user-nav-links']}>
            <ul>
              <li>
                <Divider length="16px" type={DividerType.Vertical} />
              </li>
              <li>
                <HelpIcon />
              </li>
              <li>
                <HappyIcon />
              </li>
              <li>
                <Avatar
                  size="extra-small"
                  variant={avatarVariant}
                  profilePic={profilePic}
                  onClick={(): void => {
                    setUser();
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
