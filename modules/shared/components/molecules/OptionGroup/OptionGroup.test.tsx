import React from 'react';
import { render, screen } from '@testing-library/react';
import OptionGroup from './OptionGroup';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';

describe('OptionGroup molecule', () => {
  it('should render the exact options being passed', () => {
    const options = [
      { id: '0', value: '' },
      { id: '1', value: '' },
    ];
    render(
      <OptionGroup
        variantMessage={(): ETextInput.Variants => {
          return ETextInput.Variants.Default;
        }}
        options={options}
        groupId="0"
      />,
    );
    const two = 2;
    expect(screen.getByTestId('optionsWrapper').childElementCount).toBe(two);
  });

  it('should not render the add options button if more than 26 options being passed', () => {
    const options = [];
    const zero = 0;
    const one = 1;
    const optionsLimit = 26;
    for (let i = zero; i < optionsLimit; i + one) {
      options.push({ id: `${i}`, value: '' });
    }
    render(
      <OptionGroup
        variantMessage={(): ETextInput.Variants => {
          return ETextInput.Variants.Default;
        }}
        options={options}
        groupId="0"
      />,
    );
    expect(screen.queryByText('Add choice')).toBeNull();
  });
});
