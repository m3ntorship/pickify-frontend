import React from 'react';
import renderer from 'react-test-renderer';
import Widget from './Widget';

describe('Widget', () => {
  it('should render Widget successfully', () => {
    const tree = renderer
      .create(
        <Widget>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Widget>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
