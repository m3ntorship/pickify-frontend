import React from 'react';
import type { FC, ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import styles from './Navigation.module.css';
import Logo from '../../icons/logo.svg';
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

const isActiveIcon = (path: string, currentPath: string): string =>
  path === currentPath ? 'fill-dark' : 'hover:fill-dark fill-grey';

const Navigation: FC = (): ReactElement => {
  const { pathname } = useRouter();
  const { user } = useAuth();
  const { redirectToLoginPage, redirectToProfilePage } = useRedirect();

  const homeNavLinks = [
    {
      name: 'home',
      path: '/',
      content: <HomeIcon className={isActiveIcon('/', pathname)} />,
    },
    {
      name: 'friends',
      path: '/friends',
      content: <FriendsIcon className={isActiveIcon('/friends', pathname)} />,
    },
    {
      name: 'bill',
      path: '/notifications',
      content: (
        <BillIcon className={isActiveIcon('/notifications', pathname)} />
      ),
    },
  ];

  const userNavLinks = [
    {
      name: 'help',
      path: '/',
      content: <HelpIcon className="fill-grey" />,
    },
    {
      name: 'happy',
      path: '/',
      content: <HappyIcon />,
    },
  ];

  const onMenuClick = async (menuId: string): Promise<void> => {
    switch (menuId) {
      case 'logout':
        try {
          await logoutUser();
          redirectToLoginPage();
        } catch (err: unknown) {
          toast.error('Logo out access is denied');
        }
        break;
      case 'profile':
        redirectToProfilePage();
        break;
      default:
        toast.error('cant find your option :(');
    }
  };
  const avatarVariant = user?.userImg ? 'filled' : 'notFilled';

  return (
    <nav className={styles['navigation-wrapper']}>
      <div className={styles.navigation}>
        <Link href="/">
          <a>
            <Logo className="transform scale-80 -ml-sx" />
          </a>
        </Link>

        <div className={styles['nav-links']}>
          <ul>
            {homeNavLinks.map((homeNavItem) => (
              <li key={homeNavItem.name}>
                <Link href={homeNavItem.path}>
                  <a>{homeNavItem.content}</a>
                </Link>
              </li>
            ))}
            <li className="hidden md:inline-block">
              <Divider length="16px" type={DividerType.Vertical} />
            </li>
            {userNavLinks.map((userNavItem) => (
              <li key={userNavItem.name} className="hidden md:inline-block">
                <Link href={userNavItem.path}>
                  <a>{userNavItem.content}</a>
                </Link>
              </li>
            ))}
            <li className={styles['nav-user']}>
              <DropDown
                options={[
                  { id: 'profile', body: 'Profile' },
                  { id: 'logout', body: 'Log Out' },
                ]}
                variant="post"
                size="sm"
                onOptionMenuClick={onMenuClick}
              >
                <Avatar
                  size="extra-small"
                  variant={avatarVariant}
                  profilePic={user?.userImg ?? ''}
                />
              </DropDown>
            </li>
            <li className="hidden">
              <MenuIcon />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
