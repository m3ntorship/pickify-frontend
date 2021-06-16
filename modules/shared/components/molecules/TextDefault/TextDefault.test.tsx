import React from 'react';
import { render, screen } from '@testing-library/react';
import TextDefault from './TextDefault';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';

describe('TextDefault', () => {
  it('should render TextInput with dragOptionBtn', () => {
    render(
      <TextDefault
        id="0"
        letter="A"
        variants={ETextInput.Variants.Default}
        deletable={false}
      />,
    );
    const textInput = screen.getByTestId('text-input');
    expect(textInput).toBeInTheDocument();
    const dragOptionBtn = screen.getByTestId('dragOptionBtn');
    expect(dragOptionBtn).toBeInTheDocument();
  });
  it('should render TextInput with deleteOptionBtn', () => {
    render(
      <TextDefault
        id="0"
        letter="A"
        variants={ETextInput.Variants.Default}
        deletable
      />,
    );
    const textInput = screen.getByTestId('text-input');
    expect(textInput).toBeInTheDocument();
    const deleteOptionBtn = screen.getByTestId('deleteOptionBtn');
    expect(deleteOptionBtn).toBeInTheDocument();
  });
  it('should render TextInput with dragOptionBtn and deleteOptionBtn', () => {
    render(
      <TextDefault
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
});
