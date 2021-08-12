import React from 'react';
import type { FC, ReactElement } from 'react';
import ContentLoader from 'react-content-loader';

const ProfileTextPostLoader: FC = (props): ReactElement => {
  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 600 224"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      uniqueKey="profile-text-post-loader"
      {...props}
    >
      <circle cx="20" cy="20" r="20" />
      <rect x="52" y="13" rx="0" ry="0" width="119" height="14" />
      <rect x="0" y="52" rx="0" ry="0" width="479" height="16" />
      <rect x="0" y="80" rx="0" ry="0" width="600" height="40" />
      <rect x="0" y="132" rx="0" ry="0" width="600" height="40" />
      <rect x="0" y="184" rx="0" ry="0" width="600" height="40" />
    </ContentLoader>
    // <ContentLoader
    //   height={230}
    //   width={1200}
    //   {...props}
    //   uniqueKey="profile-text-post-loader"
    // >
    //   <circle cx="20" cy="20" r="20" />
    //   <rect x="55" y="13" width="119" height="16" />
    //   <rect x="0" y="51" width="479" height="19" />
    //   <rect x="0" y="82" width="1200" height="40" />
    //   <rect x="0" y="134" width="1200" height="40" />
    //   <rect x="0" y="186" width="1200" height="40" />
    // </ContentLoader>
  );
};
export default ProfileTextPostLoader;
