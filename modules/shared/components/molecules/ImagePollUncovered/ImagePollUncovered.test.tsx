import React from 'react';
import renderer from 'react-test-renderer';
import ImagePollUncoveredStory from './ImagePollUncovered';

describe('ImagePollUncoveredStory', () => {
  it('should render vertical Progress with primary meterColor when passing mostVoted=[true] leastVoted=[false]', () => {
    const tree = renderer.create(
      <ImagePollUncoveredStory
        type="vertical"
        mostVoted
        leastVoted={false}
        verticalMeterHeight={300}
        id="option_1"
        percentage={50}
      />,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should render vertical Progress with red meterColor when passing mostVoted=[false] leastVoted=[true]', () => {
    const tree = renderer.create(
      <ImagePollUncoveredStory
        type="vertical"
        mostVoted={false}
        leastVoted
        verticalMeterHeight={300}
        id="option_1"
        percentage={50}
      />,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should render vertical Progress with primary-shd05 meterColor when passing mostVoted=[false] leastVoted=[false]', () => {
    const tree = renderer.create(
      <ImagePollUncoveredStory
        type="vertical"
        mostVoted={false}
        leastVoted={false}
        verticalMeterHeight={300}
        id="option_1"
        percentage={50}
      />,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should render circular Progress with primary meterColor when passing mostVoted=[true] leastVoted=[false]', () => {
    const tree = renderer.create(
      <ImagePollUncoveredStory
        type="circular"
        mostVoted
        leastVoted={false}
        id="option_1"
        percentage={50}
      />,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should render circular Progress with red meterColor when passing mostVoted=[false] leastVoted=[true]', () => {
    const tree = renderer.create(
      <ImagePollUncoveredStory
        type="circular"
        mostVoted={false}
        leastVoted
        id="option_1"
        percentage={50}
      />,
    );

    expect(tree).toMatchSnapshot();
  });
});
