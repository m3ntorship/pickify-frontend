import React from 'react';
import renderer from 'react-test-renderer';
import Slider from '.';

describe('snapshot testing', () => {
  it('should render horizontally when given horizontal property', () => {
    const tree = renderer
      .create(<Slider type="horizontal" progress={50} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render vertically when given vertical property', () => {
    const tree = renderer
      .create(
        <Slider
          type="vertical"
          progress={50}
          height={300}
          verticalMeterColor="primary"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render circular when given circular property', () => {
    const tree = renderer
      .create(<Slider type="circular" progress={50} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
