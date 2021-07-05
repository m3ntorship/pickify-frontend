import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ImagePollOption from './ImagePollOption';

describe('ImagePollOption', () => {
  it('should render heart icon when passing isVoted=[false]', () => {
    const tree = renderer
      .create(
        <ImagePollOption
          imageUrl="https://source.unsplash.com/random"
          imgCaption="caption"
          imgCaptionLetter="A"
          optionId="option_1"
          leastVoted={false}
          mostVoted={false}
          percentage={0}
          isVoted={false}
          onOptionClick={(): boolean => true}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render primary progress bar when passing isVoted=[true] and mostVoted=[true]', () => {
    const tree = renderer
      .create(
        <ImagePollOption
          imageUrl="https://source.unsplash.com/random"
          imgCaption="caption"
          imgCaptionLetter="A"
          optionId="option_1"
          leastVoted={false}
          mostVoted
          percentage={80}
          isVoted
          onOptionClick={(): boolean => true}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render red progress bar when passing isVoted=[true] and leastVoted=[true]', () => {
    const tree = renderer
      .create(
        <ImagePollOption
          imageUrl="https://source.unsplash.com/random"
          imgCaption="caption"
          imgCaptionLetter="A"
          optionId="option_1"
          leastVoted
          mostVoted={false}
          percentage={20}
          isVoted
          onOptionClick={(): boolean => true}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
