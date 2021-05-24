import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Footer from './Footer';

describe('Testing Footer with snapshot', () => {
  it('Testing Footer with required props', () => {
    const tree = renderer
      .create(<Footer numberOfVotes={120} showResult={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Testing Footer with required props', () => {
    const tree = renderer
      .create(<Footer numberOfVotes={120} showResult />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
