import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Button from './Button';

it('renders correctly', () => {
  const tree = renderer.create(<Button buttonText="Some Text" />).toJSON();
  expect(tree).toMatchSnapshot();
});
