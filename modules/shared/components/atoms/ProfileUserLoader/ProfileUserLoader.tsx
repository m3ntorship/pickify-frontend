import React from 'react';
import type { FC, ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

const ProfileUserLoader: FC = (props): ReactElement => {
  return (
    <ContentLoader
      speed={2}
      width={120}
      height={68}
      viewBox="0 0 120 68"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      uniqueKey="profile-user-post-loader"
      {...props}
    >
      <circle cx="60" cy="20" r="20" />
      <rect x="0" y="52" rx="0" ry="0" width="120" height="16" />
    </ContentLoader>
  );
};
export default ProfileUserLoader;
