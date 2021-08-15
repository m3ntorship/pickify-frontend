import React from 'react';
import HomeIcon from '../../icons/home.svg';
import FriendsIcon from '../../icons/friends.svg';
import BillIcon from '../../icons/bill.svg';
import HelpIcon from '../../icons/help.svg';
import HappyIcon from '../../icons/happy.svg';
import type { INavigation } from './INavigation';

const isActiveIcon = (path: string, currentPath: string): string =>
  path === currentPath ? 'fill-dark' : 'hover:fill-dark fill-grey';

export const getHomeNavLinks = (pathname: string): INavigation.INavLinks[] => [
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
    content: <BillIcon className={isActiveIcon('/notifications', pathname)} />,
  },
];

export const getUserNavLinks = (): INavigation.INavLinks[] => [
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
