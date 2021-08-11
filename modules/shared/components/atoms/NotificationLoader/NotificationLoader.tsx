import React from 'react';
import type { FC, ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

const NotificationLoader: FC = (props): ReactElement => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={40}
      viewBox="0 0 400 40"
      backgroundColor="#f3f3f3"
      foregroundColor="#C5DCE3"
      {...props}
    >
      <rect x="55" y="13" rx="3" ry="3" width="119" height="16" />
      <circle cx="20" cy="20" r="20" />
    </ContentLoader>
  );
};
export default NotificationLoader;
