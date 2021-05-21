import React from 'react';
import { render } from '@testing-library/react';
import ImageCaption from '.';

describe('imageCaption', () => {
  it('should render caption with text (Black T-shirt) and letter (A) when given this as property', () => {
    const { getByText } = render(
      <ImageCaption imgCaptionLetter="A" imgCaption="Black T-shirt" />,
    );
    expect(getByText('Black T-shirt')).toBeInTheDocument();
    expect(getByText('A')).toBeInTheDocument();
  });

  it('should render caption without letter and divider when not given this as a property', () => {
    const { getByTestId } = render(<ImageCaption imgCaption="Black T-shirt" />);
    expect(getByTestId('captionLetter')).toHaveClass('hidden');
    expect(getByTestId('captionDivider')).toHaveClass('hidden');
    // expect(getByTestId('captionLetter')).not.toBeVisible()
    // expect(getByTestId('captionDivider')).not.toBeVisible();
  });
});
