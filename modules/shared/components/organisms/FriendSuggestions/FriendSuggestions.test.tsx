import { render } from '@testing-library/react';
import * as React from 'react';
import FriendSuggestions from './FriendSuggestions';
import { dummyData } from './dummyData';

describe('FriendSuggestions Component', () => {
  it('Should render a FriendSuggestion component for each question given', () => {
    const expectedLength = dummyData.length;
    const { getAllByTestId } = render(<FriendSuggestions />);
    const allQuestions = getAllByTestId('friend-suggestion');
    expect(allQuestions.length).toEqual(expectedLength);
  });
});
