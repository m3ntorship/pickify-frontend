import React from 'react';
import type { FC, ReactElement } from 'react';

const PageHeader: FC = ({ children }): ReactElement => {
  return <h1 className="text-md md:text-lg text-dark mb-l">{children}</h1>;
};

export default PageHeader;
