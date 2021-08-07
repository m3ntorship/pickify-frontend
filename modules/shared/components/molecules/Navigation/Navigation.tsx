import React from 'react';
import type { FC, ReactElement } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';
import HomeIcon from '../../icons/home.svg';
import FriendsIcon from '../../icons/friends.svg';
import BillIcon from '../../icons/bill.svg';
import HelpIcon from '../../icons/help.svg';
import HappyIcon from '../../icons/happy.svg';
import Avatar from '../../atoms/Avatar/Avatar';
import Divider from '../../atoms/Divider/Divider';
import MenuIcon from '../../icons/menu.svg';
import { DividerType } from '../../atoms/Divider/types/EDivider';
import { logoutUser } from '../../../../../context/AuthUserContext/api/authApi';
import { useRedirect } from '../../../hooks/useRedirect/useRedirect';
import { useAuth } from '../../../../../context/AuthUserContext/AuthUserContext';
import DropDown from '../../atoms/DropDown/DropDown';

const Navigation: FC = (): ReactElement => {
  const { user } = useAuth();
  const { redirectToLoginPage } = useRedirect();

  const logout = async (): Promise<void> => {
    try {
      await logoutUser();
      redirectToLoginPage();
    } catch (err: unknown) {
      console.log('Logo out access is denied', err);
    }
  };
  const avatarVariant = user?.userImg ? 'filled' : 'notFilled';

  return (
    <nav className={styles['navigation-wrapper']}>
      <div className={styles.navigation}>
        <div className="brand-name-container">
          <Link href="/">
            <a className={styles['brand-name']}>Pickify</a>
          </Link>
        </div>
        <div className={styles['nav-links-container']}>
          <div className={styles['home-nav-links']}>
            <ul>
              <li>
                <Link href="/">
                  <a>
                    <HomeIcon />
                  </a>
                </Link>
              </li>
              <li>
                <FriendsIcon />
              </li>
              <li className="hidden md:inline">
                <BillIcon />
              </li>
              <li className="md:hidden">
                <DropDown
                  options={[{ id: 'logout', body: 'Log Out' }]}
                  variant="post"
                  size="sm"
                  onOptionMenuClick={logout}
                >
                  <Avatar
                    size="extra-small"
                    variant={avatarVariant}
                    profilePic={user?.userImg ?? ''}
                  />
                </DropDown>
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
                <DropDown
                  options={[{ id: 'logout', body: 'Log Out' }]}
                  variant="post"
                  size="sm"
                  onOptionMenuClick={logout}
                >
                  <Avatar
                    size="extra-small"
                    variant={avatarVariant}
                    profilePic={user?.userImg ?? ''}
                  />
                </DropDown>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
