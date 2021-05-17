import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Heading from './index';

describe('example of a test suite', () => {
  it('example of single test', () => {
    const tree = renderer.create(<Heading text="hi" />);
    expect(tree).toMatchSnapshot();
  });
});
