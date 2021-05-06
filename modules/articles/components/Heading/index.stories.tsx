import type { ReactElement } from 'react';
import Heading from '.';

export default {
  component: Heading,
  title: 'TS/Heading',
};

export const HeadingTS = (): ReactElement => (
  <Heading text="political articles" />
);
