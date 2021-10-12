import React from 'react';
import renderer from 'react-test-renderer';
import ImagePollUncovered from './ImagePollUncovered';

describe('ImagePollUncovered', () => {
  it('should render vertical Progress with primary meterColor when passing mostVoted=[true] leastVoted=[false]', () => {
    const tree = renderer.create(
      <ImagePollUncovered
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
      <ImagePollUncovered
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
      <ImagePollUncovered
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

  it('should render circular Progress with primary meterColor when passing optionBody=[yes]', () => {
    const tree = renderer.create(
      <ImagePollUncovered
        type="circular"
        optionBody="yes"
        id="option_1"
        percentage={50}
      />,
    );

    expect(tree).toMatchSnapshot();
  });

  it('should render circular Progress with red meterColor when passing optionBody=[no]', () => {
    const tree = renderer.create(
      <ImagePollUncovered
        type="circular"
        optionBody="no"
        id="option_1"
        percentage={50}
      />,
    );

    expect(tree).toMatchSnapshot();
  });
});
