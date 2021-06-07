import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ImagePollImage from './ImagePollImage';

describe('Privacy Component with snapshot', () => {
  it('should render the like and dislike voteIcon  ', () => {
    const tree = renderer.create(<ImagePollImage isOneImageVote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render the heart voteIcon  ', () => {
    const tree = renderer
      .create(<ImagePollImage isOneImageVote={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
