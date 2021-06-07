import React from 'react';
import * as renderer from 'react-test-renderer';
import ImageCaption from './ImageCaption';

describe('imageCaption snapshots', () => {
  it('should render caption with text (Black T-shirt) and letter (A) when given this as property', () => {
    const tree = renderer
      .create(<ImageCaption imgCaptionLetter="A" imgCaption="Black T-shirt" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render caption without letter and divider when not given this as a property', () => {
    const tree = renderer
      .create(<ImageCaption imgCaption="Black T-shirt" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
