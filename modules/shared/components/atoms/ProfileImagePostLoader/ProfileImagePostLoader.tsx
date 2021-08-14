import React from 'react';
import type { FC, ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

const ProfileImagePostLoader: FC = (props): ReactElement => {
  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 600 224"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      uniqueKey="profile-image-post-loader"
      {...props}
    >
      <circle cx="20" cy="20" r="20" />
      <rect x="52" y="13" rx="0" ry="0" width="119" height="14" />
      <rect x="0" y="52" rx="0" ry="0" width="479" height="16" />
      <rect x="0" y="80" rx="0" ry="0" width="294" height="144" />
      <rect x="306" y="80" rx="0" ry="0" width="294" height="144" />
    </ContentLoader>
  );
};
export default ProfileImagePostLoader;
