import { render } from '@testing-library/react';
import * as React from 'react';
import TrendingQuestion from './TrendingQuestion';

describe('Trending Question Component', () => {
  it('Should render with image poll icon when type is image poll', () => {
    const { getByText } = render(
      <TrendingQuestion
        type="Image Poll"
        postCaption="Which image looks better?"
      />,
    );
    const type = getByText('Image Poll');
    expect(type).toBeInTheDocument();
  });

  it('Should render with text poll icon when type is text poll', () => {
    const { getByText } = render(
      <TrendingQuestion type="Text Poll" postCaption="Vim or Emacs?" />,
    );
    const type = getByText('Text Poll');
    expect(type).toBeInTheDocument();
  });

  it('Should render with image poll icon when type is image poll', () => {
    const { getByText } = render(
      <TrendingQuestion
        type="Mini Survey"
        postCaption="Help me with this outfit"
      />,
    );
    const type = getByText('Mini Survey');
    expect(type).toBeInTheDocument();
  });
});
