import * as React from 'react';
import { render, screen } from '@testing-library/react';
import type { TargetElement } from '@testing-library/user-event';
import TextDefault from './TextDefault';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';

describe('Testing the TextDefault component', () => {
  it('shout render delete icon when the prop deletable={true}', () => {
    render(
      <TextDefault
        id="test"
        letter="a"
        variants={ETextInput.Variants.Default}
        deletable
      />,
    );
    const deleteOptionBtn: TargetElement =
      screen.getByTestId('deleteOptionBtn');
    expect(deleteOptionBtn).toBeInTheDocument();
  });
});
