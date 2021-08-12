import React from 'react';
import type { FC, ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

const ProfileImagePostLoader: FC = (props): ReactElement => {
  return (
    <ContentLoader viewBox="0 0  " height={230} width={1200} {...props}>
      <circle cx="20" cy="20" r="20" />
      <rect x="55" y="13" width="119" height="16" />
      <rect x="0" y="51" width="479" height="19" />
      <rect x="0" y="82" width="294" height="144" />
      <rect x="306" y="82" width="294" height="144" />
    </ContentLoader>
  );
};
export default ProfileImagePostLoader;
