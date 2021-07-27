import React from 'react';
import type { FC, ReactElement } from 'react';
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
import { logoutUser } from '../../../api/auth';
import { useRedirect } from '../../../hooks/useRedirect/useRedirect';

const Navigation: FC<INavigation.IProps> = (props): ReactElement => {
  const { profilePic } = props;
  const { redirectToLoginPage } = useRedirect();

  const logout = async (): Promise<void> => {
    await logoutUser();
    redirectToLoginPage();
  };
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
              <li className="hidden md:inline">
                <BillIcon />
              </li>
              <li className="md:hidden">
                <Avatar
                  size="extra-small"
                  variant={avatarVariant}
                  profilePic={profilePic}
                  onClick={logout}
                />
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
                  onClick={logout}
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
