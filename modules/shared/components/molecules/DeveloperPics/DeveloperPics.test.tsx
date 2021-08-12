import { render } from '@testing-library/react';
import * as React from 'react';
import { images } from './images';
import DeveloperPics from './DeveloperPics';

describe('DeveloperPics Component', () => {
  it('Should render an avatar component for each image given', () => {
    const expectedLength = images.length;
    const { getAllByTestId } = render(<DeveloperPics />);
    const allDeveloperPics = getAllByTestId('developer-pic');
    expect(allDeveloperPics.length).toEqual(expectedLength);
  });
});
