import React from 'react';
import type { FC, ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import styles from './Navigation.module.css';
import Logo from '../../icons/logo.svg';
import Avatar from '../../atoms/Avatar/Avatar';
import Divider from '../../atoms/Divider/Divider';
// import MenuIcon from '../../icons/menu.svg';
import { DividerType } from '../../atoms/Divider/types/EDivider';
import { logoutUser } from '../../../../../context/AuthUserContext/api/authApi';
import { useRedirect } from '../../../hooks/useRedirect/useRedirect';
import { useAuth } from '../../../../../context/AuthUserContext/AuthUserContext';
import DropDown from '../../atoms/DropDown/DropDown';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
import HelpIcon from '../../icons/help.svg';

import { getHomeNavLinks } from './navLinksData';
import Feedback from '../../organisms/Feedback/Feedback';

const Navigation: FC = (): ReactElement => {
  const { pathname } = useRouter();
  const { user } = useAuth();
  const { redirectToLoginPage, redirectToProfilePage, redirectToFriendsPage } =
    useRedirect();
  const homeNavLinks = getHomeNavLinks(pathname);

  const onMenuClick = async (menuId: string): Promise<void> => {
    switch (menuId) {
      case 'logout':
        try {
          await logoutUser();
          redirectToLoginPage();
        } catch (err: unknown) {
          toast.error('Logging out access is denied');
        }
        break;
      case 'profile':
        redirectToProfilePage();
        break;
      case 'friends':
        redirectToFriendsPage();
        break;
      default:
        toast.error('cant find your option :(');
    }
  };
  const avatarVariant = user?.userImg ? 'filled' : 'notFilled';

  return (
    <nav className={styles['navigation-wrapper']}>
      <div className={styles.navigation}>
        <div className="flex">
          <Link href="/">
            <a className="self-center">
              <Logo className="transform scale-80 -ml-sx" />
            </a>
          </Link>
          <div className={styles['search-box']}>
            <TextInput
              disabled
              inputType={ETextInput.InputType.Search}
              variants={ETextInput.Variants.Default}
              id=""
              value=""
              placeholder="Search Pickify"
              onBlurInputHandler={(): boolean => true}
              onChangeInputValueHandler={(): boolean => true}
              onClickDeleteInputValueHandler={(): boolean => true}
            />
          </div>
        </div>
        <div className={styles['nav-links']}>
          <ul>
            {homeNavLinks.map((homeNavItem) => {
              if (homeNavItem.name === 'friends') {
                return (
                  <li key={homeNavItem.name} className="hidden sm:inline-block">
                    <Link href={homeNavItem.path}>
                      <a>{homeNavItem.content}</a>
                    </Link>
                  </li>
                );
              }
              return (
                <li key={homeNavItem.name}>
                  <Link href={homeNavItem.path}>
                    <a>{homeNavItem.content}</a>
                  </Link>
                </li>
              );
            })}
            <li className="hidden md:inline-block">
              <Divider length="16px" type={DividerType.Vertical} />
            </li>
            <li className="hidden md:inline-block">
              <a role="button" aria-hidden="true">
                <HelpIcon className="fill-grey" />
              </a>
            </li>
            <li className="">
              <Feedback />
            </li>
            <li className={styles['nav-user']}>
              <DropDown
                options={[
                  { id: 'profile', body: 'Profile' },
                  { id: 'friends', body: 'Friends' },
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
            {/* <li className="hidden">
              <MenuIcon />
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
