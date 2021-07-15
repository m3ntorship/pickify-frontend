import React from 'react';
import renderer from 'react-test-renderer';
import ImageView from './ImageView';

describe('ImageView', () => {
  it('should render ImageView with imgSrc and id props', () => {
    const tree = renderer
      .create(
        <ImageView
          imgSrc="https://placeimg.com/640/480/any"
          id="image_1"
          imgAlt="option"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
