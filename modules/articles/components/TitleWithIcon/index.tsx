import type { FC } from 'react';
import { textToUpperCase } from '../../logic';
import { onClickOutSide } from '../../hooks';

const TitleWithIcon: FC = (): JSX.Element => {
  const isClicked: boolean = onClickOutSide();
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>
        {' '}
        {textToUpperCase('check our articles')}
      </h2>
      <div>{isClicked ? 'clicked' : ''}</div>
    </>
  );
};

export default TitleWithIcon;
