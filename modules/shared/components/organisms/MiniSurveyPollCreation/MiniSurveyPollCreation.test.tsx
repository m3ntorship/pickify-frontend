import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MiniSurveyPollCreation from './MiniSurveyPollCreation';

const one = 1;
const two = 2;
describe('MiniSurveyPollCreation', () => {
  it('should be able to write post Caption', () => {
    render(<MiniSurveyPollCreation />);
    const postCaption = screen.getByPlaceholderText(
      'What do you want to ask about?',
    );
    userEvent.type(postCaption, 'this is post caption');
    expect(postCaption).toHaveValue('this is post caption');
  });
  it('should be able to fill the default two options in the first default group', () => {
    render(<MiniSurveyPollCreation />);
    const option1 = screen.getByPlaceholderText('Option 1');
    const option2 = screen.getByPlaceholderText('Option 2');
    userEvent.type(option1, 'this is option1');
    userEvent.type(option2, 'this is option2');
    expect(option1).toHaveValue('this is option1');
    expect(option2).toHaveValue('this is option2');
  });
  it('should add two goups after clicking "Add Option Group" button', () => {
    render(<MiniSurveyPollCreation />);
    const addOptionGroupBtn = screen.getByTestId('addOptionGroupBtn');
    userEvent.click(addOptionGroupBtn);
    expect(screen.getAllByTestId('optionsWrapper').length).toBe(two);
  });
  it('should delete last group clicking delete group button', () => {
    render(<MiniSurveyPollCreation />);
    const addOptionGroupBtn = screen.getByTestId('addOptionGroupBtn');
    userEvent.click(addOptionGroupBtn);
    const detetGroupBtn = screen.getByTestId('removeGroup-button');
    userEvent.click(detetGroupBtn);
    expect(screen.getAllByTestId('optionsWrapper').length).toBe(one);
  });
});
