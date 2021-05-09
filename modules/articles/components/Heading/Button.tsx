import * as React from 'react';

export function giveMeFive(): number {
  const five = 5;
  return five;
}

interface Props {
  buttonText: string;
}

export default ({ buttonText }: Props): React.ReactElement => (
  <button
    type="button"
    onClick={(): void => {
      console.log(giveMeFive());
    }}
  >
    {buttonText}
  </button>
);
