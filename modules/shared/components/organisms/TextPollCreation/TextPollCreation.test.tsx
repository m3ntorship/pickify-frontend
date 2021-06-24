import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextPollCreation from './TextPollCreation';

const two = 2;
const three = 3;
describe('TextPollCreation', () => {
  it('should be able to write post Caption', () => {
    const mockedFn = jest.fn();
    render(<TextPollCreation createTextPollPost={mockedFn} />);
    const postCaption = screen.getByPlaceholderText(
      'What do you want to ask about?',
    );
    userEvent.type(postCaption, 'this is post caption');
    expect(postCaption).toHaveValue('this is post caption');
  });
  it('should be able to fill the default two options', () => {
    const mockedFn = jest.fn();
    render(<TextPollCreation createTextPollPost={mockedFn} />);
    const option1 = screen.getByPlaceholderText('Option 1');
    const option2 = screen.getByPlaceholderText('Option 2');
    userEvent.type(option1, 'this is option1');
    userEvent.type(option2, 'this is option2');
    expect(option1).toHaveValue('this is option1');
    expect(option2).toHaveValue('this is option2');
  });

  it('should render as default of two options without delete option icon but if you click on addOptionBtn should render deleteOptionBtn', () => {
    const mockedFn = jest.fn();
    render(<TextPollCreation createTextPollPost={mockedFn} />);
    expect(screen.queryByTestId('deleteOptionBtn')).not.toBeInTheDocument();
    userEvent.click(screen.getByTestId('addOptionBtn'));
    expect(screen.getAllByTestId('deleteOptionBtn')).toHaveLength(three);
  });

  it('click on the third deleteOptionBtn should delete this option and then component get back to default without deleteOptionBtns', () => {
    const mockedFn = jest.fn();
    render(<TextPollCreation createTextPollPost={mockedFn} />);
    userEvent.click(screen.getByTestId('addOptionBtn'));
    expect(screen.getByPlaceholderText('Option 3')).toBeInTheDocument();
    // click on the third option delete button
    userEvent.click(screen.getAllByTestId('deleteOptionBtn')[two]);
    expect(screen.queryByPlaceholderText('Option 3')).not.toBeInTheDocument();
    expect(screen.getByTestId('optionsWrapper').childElementCount).toBe(two);
    expect(screen.queryByTestId('deleteOptionBtn')).not.toBeInTheDocument();
  });
});
