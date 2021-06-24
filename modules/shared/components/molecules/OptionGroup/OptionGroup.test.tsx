import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OptionGroup from './OptionGroup';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';

describe('OptionGroup molecule', () => {
  it('should render the exact options being passed', () => {
    const options = [
      { id: '0', body: '' },
      { id: '1', body: '' },
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

  it('click on add choice (option) button', () => {
    const options = [
      { id: '0', body: '' },
      { id: '1', body: '' },
    ];
    const onClick = jest.fn();
    render(
      <OptionGroup
        variantMessage={(): ETextInput.Variants => {
          return ETextInput.Variants.Default;
        }}
        options={options}
        setOptions={onClick}
        groupId="0"
      />,
    );
    const addOption = screen.getByTestId('addOptionBtn');
    userEvent.click(addOption);
    const one = 1;
    expect(onClick).toHaveBeenCalledTimes(one);
  });

  it('should not render the add options button if more than 26 options being passed', () => {
    const optionsLimit = 26;
    const options = new Array(optionsLimit);

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
