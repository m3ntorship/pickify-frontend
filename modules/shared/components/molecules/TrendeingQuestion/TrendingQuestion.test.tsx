import { render } from '@testing-library/react';
import * as React from 'react';
import TrendingQuestion, { truncate } from './TrendingQuestion';

describe('Trending Question Component', () => {
  it('Should render with image poll icon when type is image poll', () => {
    const { getByText } = render(
      <TrendingQuestion type="Image Poll" text="Which image looks better?" />,
    );
    const type = getByText('Image Poll');
    expect(type).toBeInTheDocument();
  });

  it('Should render with text poll icon when type is text poll', () => {
    const { getByText } = render(
      <TrendingQuestion type="Text Poll" text="Vim or Emacs?" />,
    );
    const type = getByText('Text Poll');
    expect(type).toBeInTheDocument();
  });

  it('Should render with image poll icon when type is image poll', () => {
    const { getByText } = render(
      <TrendingQuestion type="Mini Survey" text="Help me with this outfit" />,
    );
    const type = getByText('Mini Survey');
    expect(type).toBeInTheDocument();
  });
});

describe('truncate function works correctly', () => {
  it('Truncates text correctly when the length is bigger than 29', () => {
    const string = truncate('What are 2021 best programmin 7agaaaaaaaaa');
    const expectedResult = 'What are 2021 best programmin...';
    expect(string).toEqual(expectedResult);
  });
});
