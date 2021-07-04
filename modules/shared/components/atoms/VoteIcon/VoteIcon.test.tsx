import React from 'react';
import renderer from 'react-test-renderer';
import VoteIcon from './VoteIcon';

describe('snapshot testing', () => {
  it('should render like button when passing isOneImageVote=[true] and like=[true]', () => {
    const tree = renderer.create(<VoteIcon isOneImageVote like />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render dislike button when passing isOneImageVote=[true] and dislike=[true]', () => {
    const tree = renderer.create(<VoteIcon isOneImageVote dislike />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render heart button when passing isOneImageVote=[false]', () => {
    const tree = renderer.create(<VoteIcon isOneImageVote={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
