import React from 'react';
import renderer from 'react-test-renderer';
import VoteImage from './VoteImage';

describe('snapshot testing', () => {
  it('should render heart button when oneImage is true', () => {
    const tree = renderer.create(<VoteImage oneImage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render two buttons when oneImage is true', () => {
    const tree = renderer.create(<VoteImage oneImage={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
