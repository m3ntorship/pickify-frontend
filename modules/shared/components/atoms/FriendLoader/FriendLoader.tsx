import React from 'react';
import type { FC, ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

const FriendLoader: FC = (props): ReactElement => {
  return (
    <ContentLoader viewBox="0 0 180 145" width={180} height={145} {...props}>
      <circle cx="90" cy="30" r="20" />
      <rect x="30" y="60" rx="3" ry="3" width="119" height="16" />
      <rect x="30" y="90" rx="3" ry="3" width="119" height="8" />
      <rect x="5" y="110" rx="15" ry="15" width="80" height="32" />
      <rect x="95" y="110" rx="15" ry="15" width="80" height="32" />
    </ContentLoader>
  );
};
export default FriendLoader;
