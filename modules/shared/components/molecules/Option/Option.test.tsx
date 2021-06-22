import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Option from './Option';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';

describe('TextDefault', () => {
  it('should render TextInput with dragOptionBtn and deleteOptionBtn', () => {
    render(
      <Option
        id="0"
        letter="A"
        variants={ETextInput.Variants.Default}
        deletable
      />,
    );
    const textInput = screen.getByTestId('text-input');
    expect(textInput).toBeInTheDocument();
    const dragOptionBtn = screen.getByTestId('dragOptionBtn');
    expect(dragOptionBtn).toBeInTheDocument();
    const deleteOptionBtn = screen.getByTestId('deleteOptionBtn');
    expect(deleteOptionBtn).toBeInTheDocument();
  });
  it('should run delete Option function', () => {
    const mockDeleteFunction = jest.fn();
    const numberOfCalls = 1;
    render(
      <Option
        id="0"
        letter="A"
        variants={ETextInput.Variants.Default}
        deletable
        deleteInputHandler={mockDeleteFunction}
      />,
    );
    const deleteOptionBtn = screen.getByTestId('deleteOptionBtn');
    userEvent.click(deleteOptionBtn);
    expect(mockDeleteFunction).toBeCalledTimes(numberOfCalls);
  });
});
