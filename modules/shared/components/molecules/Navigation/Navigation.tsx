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
import Avatar from '../../atoms/Avatar/Avatar';
import Divider from '../../atoms/Divider/Divider';
import MenuIcon from '../../icons/menu.svg';
import { DividerType } from '../../atoms/Divider/types/EDivider';
import { logoutUser } from '../../../../../context/AuthUserContext/api/authApi';
import { useRedirect } from '../../../hooks/useRedirect/useRedirect';
import { useAuth } from '../../../../../context/AuthUserContext/AuthUserContext';
import DropDown from '../../atoms/DropDown/DropDown';
import Feedback from '../../organisms/Feedback/Feedback';

const Navigation: FC = (): ReactElement => {
  const { pathname } = useRouter();
  const { user } = useAuth();
  const { redirectToLoginPage } = useRedirect();
  const logout = async (): Promise<void> => {
    try {
      await logoutUser();
      redirectToLoginPage();
    } catch (err: unknown) {
      toast.error('Logo out access is denied');
    }
  };
  const avatarVariant = user?.userImg ? 'filled' : 'notFilled';
  // const { nodeRef, triggerRef, setShow, show } = useDetectClickOut(false);

  // const [showFeedback, setShowFeedback] = useState(false);

  // const handleHappyFaceClick = (): void => {
  //   setShowFeedback(!showFeedback);
  // };
  const homeNavLinks = [
    {
      name: 'home',
      path: '/',
      content: <HomeIcon />,
      active: true,
    },
    {
      name: 'friends',
      path: '/',
      content: <FriendsIcon />,
    },
    {
      name: 'bill',
      path: '/',
      content: <BillIcon />,
    },
  ];

  const userNavLinks = [
    {
      name: 'help',
      path: '/',
      content: <HelpIcon />,
    },
    {
      name: 'happy',
      path: '/',
      content: <Feedback />,
    },
  ];

  return (
    <nav className={styles['navigation-wrapper']}>
      <div className={styles.navigation}>
        <div>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <div className={styles['nav-links']}>
          <ul>
            {homeNavLinks.map((homeNavItem) => (
              <li
                key={homeNavItem.name}
                className={`${homeNavItem.path === pathname ? 'active' : ''}`}
              >
                <Link href={homeNavItem.path}>
                  <a>{homeNavItem.content}</a>
                </Link>
              </li>
            ))}
            <li className="hidden md:inline-block">
              <Divider length="16px" type={DividerType.Vertical} />
            </li>
            {userNavLinks.map((userNavItem) => (
              <li
                key={userNavItem.name}
                className={`relative ${
                  userNavItem.path === pathname ? 'active' : ''
                } hidden md:inline-block`}
              >
                <Link href={userNavItem.path}>
                  <a aria-hidden>{userNavItem.content}</a>
                </Link>
              </li>
            ))}
            <li className={styles['nav-user']}>
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
            <li className="md:hidden">
              <MenuIcon />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
