import React from 'react';
import renderer from 'react-test-renderer';
import Login from './Login';

describe('Login page', () => {
  it('Snapshot testing for the login component', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
