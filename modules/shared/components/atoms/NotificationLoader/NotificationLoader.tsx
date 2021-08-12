import React from 'react';
import type { FC, ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

const NotificationLoader: FC = (props): ReactElement => {
  return (
    <ContentLoader
      speed={2}
      width={172}
      height={40}
      viewBox="0 0 172 40"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      uniqueKey="notification-loader"
      {...props}
    >
      <circle cx="20" cy="20" r="20" />
      <rect x="52" y="12" rx="0" ry="0" width="120" height="16" />
      <rect x="0" y="52" rx="0" ry="0" width="479" height="16" />
      <rect x="0" y="80" rx="0" ry="0" width="294" height="144" />
      <rect x="306" y="80" rx="0" ry="0" width="294" height="144" />
    </ContentLoader>
  );
};
export default NotificationLoader;
