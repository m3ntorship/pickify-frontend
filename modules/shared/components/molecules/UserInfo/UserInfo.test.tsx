import * as React from 'react';
import { render, screen } from '@testing-library/react';
import UserInfo from './UserInfo';

describe('UserInfo', () => {
  it('if isHidden equalls true, name becomes Anonymous as well', () => {
    render(<UserInfo isHidden date={new Date('2021-05-24T23:10:24.114Z')} />);
    expect(screen.getByTestId('name')).toHaveTextContent('Anonymous');
  });

  it('if isHidden equalls true, name becomes the passed username if a name is set', () => {
    render(
      <UserInfo
        isHidden
        date={new Date('2021-05-24T23:10:24.114Z')}
        name="Ahmed Ayoub"
      />,
    );
    expect(screen.getByTestId('name')).toHaveTextContent('Ahmed Ayoub');
  });

  it('if isHidden equalls false, name is whatever passed to the name prop', () => {
    render(
      <UserInfo
        isHidden={false}
        date={new Date('2021-05-24T23:10:24.114Z')}
        name="Ahmed Ayoub"
      />,
    );
    expect(screen.getByTestId('name')).toHaveTextContent('Ahmed Ayoub');
  });
});
