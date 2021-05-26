import React from 'react';
import renderer from 'react-test-renderer';
import Divider from './Divider';
import * as EDivider from './types/EDivider';

describe('Divide', () => {
  it('should render horizontally when given horizontal type property and appropriate length', () => {
    const tree = renderer
      .create(<Divider type={EDivider.DividerType.Horizontal} length="300px" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render vertically when given vertical type property and appropriate length', () => {
    const tree = renderer
      .create(<Divider type={EDivider.DividerType.Vertical} length="300px" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
