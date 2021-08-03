import React from 'react';
import type { FC, ReactElement } from 'react';
import { signOut, useSession } from 'next-auth/client';
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
import { useRedirect } from '../../../hooks/useRedirect/useRedirect';
import DropDown from '../../atoms/DropDown/DropDown';

const Navigation: FC = (): ReactElement => {
  const [session] = useSession();
  const { redirectToLoginPage } = useRedirect();

  const logout = async (): Promise<void> => {
    try {
      await signOut();
      redirectToLoginPage();
    } catch (err: unknown) {
      console.log('Logo out access is denied', err);
    }
  };
  const avatarVariant = session?.user?.image ? 'filled' : 'notFilled';
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
                <DropDown
                  options={[{ id: 'logout', body: 'Log Out' }]}
                  variant="post"
                  size="sm"
                  onOptionMenuClick={logout}
                >
                  <Avatar
                    size="extra-small"
                    variant={avatarVariant}
                    profilePic={session?.user?.image ?? ''}
                    onClick={logout}
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
                    profilePic={session?.user?.image ?? ''}
                    onClick={logout}
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
