import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ImagePollOption from './ImagePollOption';

describe('Privacy Component with snapshot', () => {
  it('should render the like and dislike voteIcon without imgCaptionLetter', () => {
    const tree = renderer
      .create(
        <ImagePollOption
          isOneImageVote
          imageUrl="https://source.unsplash.com/random"
          imgCaption="aaaaaaa"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render the like and dislike voteIcon with imgCaptionLetter', () => {
    const tree = renderer
      .create(
        <ImagePollOption
          isOneImageVote
          imageUrl="https://source.unsplash.com/random"
          imgCaption="aaaaaaa"
          imgCaptionLetter="A"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render the heart voteIcon with imgCaptionLetter', () => {
    const tree = renderer
      .create(
        <ImagePollOption
          isOneImageVote={false}
          imageUrl="https://source.unsplash.com/random"
          imgCaption="aaaaaaa"
          imgCaptionLetter="A"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render the heart voteIcon without imgCaptionLetter', () => {
    const tree = renderer
      .create(
        <ImagePollOption
          isOneImageVote={false}
          imageUrl="https://source.unsplash.com/random"
          imgCaption="aaaaaaa"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
