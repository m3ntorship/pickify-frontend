import React from 'react';
import type { FC, ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

const ProfileUserLoader: FC = (props): ReactElement => {
  return (
    <ContentLoader viewBox="0 0 180 80" width={180} height={80} {...props}>
      <circle cx="90" cy="30" r="20" />
      <rect x="30" y="60" rx="3" ry="3" width="119" height="16" />
    </ContentLoader>
  );
};
export default ProfileUserLoader;
