import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ImagePollOption from './ImagePollOption';

describe('ImagePollOption', () => {
  it('should render heart icon when passing isVoted=[false]', () => {
    const tree = renderer
      .create(
        <ImagePollOption
          media={[{ url: 'https://placeimg.com/640/480/any' }]}
          imgCaption="caption"
          imgCaptionLetter="A"
          optionId="option_1"
          leastVoted={false}
          mostVoted={false}
          percentage={0}
          isVoted={false}
          onOptionClick={(): boolean => true}
          isOptionChecked={false}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render primary progress bar when passing isVoted=[true] and mostVoted=[true]', () => {
    const tree = renderer
      .create(
        <ImagePollOption
          media={[{ url: 'https://placeimg.com/640/480/any' }]}
          imgCaption="caption"
          imgCaptionLetter="A"
          optionId="option_1"
          leastVoted={false}
          mostVoted
          percentage={80}
          isVoted
          onOptionClick={(): boolean => true}
          isOptionChecked={false}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render red progress bar when passing isVoted=[true] and leastVoted=[true]', () => {
    const tree = renderer
      .create(
        <ImagePollOption
          media={[{ url: 'https://placeimg.com/640/480/any' }]}
          imgCaption="caption"
          imgCaptionLetter="A"
          optionId="option_1"
          leastVoted
          mostVoted={false}
          percentage={20}
          isVoted
          onOptionClick={(): boolean => true}
          isOptionChecked={false}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
