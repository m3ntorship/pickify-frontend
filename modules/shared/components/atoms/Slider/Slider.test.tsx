import React from 'react';
import renderer from 'react-test-renderer';
import Slider from './Slider';

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
          verticalMeterHeight={300}
          meterColor="primary"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render circular when given circular property', () => {
    const tree = renderer
      .create(<Slider type="circular" progress={50} radius={50} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
