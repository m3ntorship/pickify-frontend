import * as React from 'react';
import { render, screen } from '@testing-library/react';
import UserInfo from './Index';

describe('UserInfo', () => {
  test('if variant equalls annonymous, name becomes Anonymous as well', () => {
    render(<UserInfo size="medium" variant="anonymous" date="2 hours" />);
    expect(screen.getByTestId('name')).toHaveTextContent('Anonymous');
  });

  test('if variant equalls annonymous, name becomes Anonymous as well even if a name is set', () => {
    render(
      <UserInfo
        size="medium"
        variant="anonymous"
        date="2 hours"
        name="Ahmed Ayoub"
      />,
    );
    expect(screen.getByTestId('name')).toHaveTextContent('Anonymous');
  });

  test('if variant equalls filled, name is whatever passed to the name prop', () => {
    render(
      <UserInfo
        size="medium"
        variant="filled"
        date="2 hours"
        name="Ahmed Ayoub"
      />,
    );
    expect(screen.getByTestId('name')).toHaveTextContent('Ahmed Ayoub');
  });

  test('if variant equalls notFilled, name is whatever passed to the name prop', () => {
    render(
      <UserInfo
        size="medium"
        variant="filled"
        date="2 hours"
        name="Ahmed Ayoub"
      />,
    );
    expect(screen.getByTestId('name')).toHaveTextContent('Ahmed Ayoub');
  });
});
