import { useState } from 'react';
import type { ReactElement } from 'react';
import Example from './index';

export default {
  component: Example,
  title: 'TSX/Example',
};

export const ExampleWithTSX = (): ReactElement => {
  const [nile] = useState('ahmed');
  return <Example name={nile} />;
};
