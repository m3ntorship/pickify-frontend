import type { ReactElement } from 'react';
import Dumb from './DumbComponent';

interface Props {
  readonly name: string;
}

const Example = ({ name }: Props): ReactElement => (
  <>
    {name}
    <Dumb />
  </>
);

export default Example;
