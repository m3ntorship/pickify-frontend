import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('should render Navigation component with notFilled avatar and Vertical divider', () => {
    const tree = renderer.create(<Navigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
