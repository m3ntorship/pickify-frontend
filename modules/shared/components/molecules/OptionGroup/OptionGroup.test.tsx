import type { ReactElement } from 'react';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm, FormProvider } from 'react-hook-form';
import OptionGroup from './OptionGroup';

const customRender = (ui: ReactElement): unknown => {
  const Wrapper: React.FC = ({ children }) => {
    const methods = useForm({
      mode: 'onSubmit',
      reValidateMode: 'onChange',
    });
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  return render(<Wrapper>{ui}</Wrapper>);
};

describe('OptionGroup molecule', () => {
  it('should render the exact options being passed', () => {
    const options = [
      { id: '0', body: '', media: [] },
      { id: '1', body: '', media: [] },
    ];
    customRender(
      <OptionGroup
        id="G0"
        index={0}
        options={options}
        onChangeOptionValueHandler={(): boolean => true}
        onClickDeleteOptionValueHandler={(): boolean => true}
        addOptionHandler={(): boolean => true}
        deleteOptionHandler={(): boolean => true}
        onBlurOptionHandler={(): boolean => true}
      />,
    );
    const two = 2;
    expect(screen.getByTestId('optionsWrapper').childElementCount).toBe(two);
  });

  it('click on add choice (option) button', () => {
    const options = [
      { id: '0', body: '', media: [] },
      { id: '1', body: '', media: [] },
    ];
    const onClick = jest.fn();
    customRender(
      <OptionGroup
        id="G0"
        index={0}
        options={options}
        onChangeOptionValueHandler={(): boolean => true}
        onClickDeleteOptionValueHandler={(): boolean => true}
        addOptionHandler={onClick}
        deleteOptionHandler={(): boolean => true}
        onBlurOptionHandler={(): boolean => true}
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

    customRender(
      <OptionGroup
        id="G0"
        index={0}
        options={options}
        onChangeOptionValueHandler={(): boolean => true}
        onClickDeleteOptionValueHandler={(): boolean => true}
        addOptionHandler={(): boolean => true}
        deleteOptionHandler={(): boolean => true}
        onBlurOptionHandler={(): boolean => true}
      />,
    );
    expect(screen.queryByText('Add choice')).toBeNull();
  });
});
