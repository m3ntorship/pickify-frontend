import type { ReactElement } from 'react';
import Toggler from '.';

export default {
  component: Toggler,
  title: 'Atoms/Toggler',
};

export const TogglerTS = (): ReactElement => (
  <Toggler id="test" size="default" disabled={false} />
);
