import React from 'react';
import renderer from 'react-test-renderer';
import VoteIcon from './VoteIcon';

describe('snapshot testing', () => {
  it('should render heart button when oneImage is true', () => {
    const tree = renderer.create(<VoteIcon isOneImageVote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render two buttons when oneImage is true', () => {
    const tree = renderer.create(<VoteIcon isOneImageVote={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
