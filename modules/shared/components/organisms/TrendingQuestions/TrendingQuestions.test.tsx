import { render } from '@testing-library/react';
import * as React from 'react';
import TrendingQuestions from './TrendingQuestions';
import { dummyData } from './dummyData';

describe('TrendingQuestions Component', () => {
  it('Should render a TrendingQuestion component for each question given', () => {
    const expectedLength = dummyData.length;
    const { getAllByTestId } = render(<TrendingQuestions />);
    const allQuestions = getAllByTestId('trending-question');
    expect(allQuestions.length).toEqual(expectedLength);
  });
});
