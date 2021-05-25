import * as React from 'react';
import { render, screen } from '@testing-library/react';
import UserInfo from './Index';

describe('UserInfo', () => {
  it('if variant equalls annonymous, name becomes Anonymous as well', () => {
    render(
      <UserInfo
        size="medium"
        variant="anonymous"
        date={new Date('2021-05-24T23:10:24.114Z')}
      />,
    );
    expect(screen.getByTestId('name')).toHaveTextContent('Anonymous');
  });

  it('if variant equalls annonymous, name becomes Anonymous as well even if a name is set', () => {
    render(
      <UserInfo
        size="medium"
        variant="anonymous"
        date={new Date('2021-05-24T23:10:24.114Z')}
        name="Ahmed Ayoub"
      />,
    );
    expect(screen.getByTestId('name')).toHaveTextContent('Anonymous');
  });

  it('if variant equalls filled, name is whatever passed to the name prop', () => {
    render(
      <UserInfo
        size="medium"
        variant="filled"
        date={new Date('2021-05-24T23:10:24.114Z')}
        name="Ahmed Ayoub"
      />,
    );
    expect(screen.getByTestId('name')).toHaveTextContent('Ahmed Ayoub');
  });

  it('if variant equalls notFilled, name is whatever passed to the name prop', () => {
    render(
      <UserInfo
        size="medium"
        variant="notFilled"
        date={new Date('2021-05-24T23:10:24.114Z')}
        name="Ahmed Ayoub"
      />,
    );
    expect(screen.getByTestId('name')).toHaveTextContent('Ahmed Ayoub');
  });
});
