import type { ReactElement } from 'react';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm, FormProvider } from 'react-hook-form';
import Option from './Option';

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

describe('Option', () => {
  it('should render TextInput with dragOptionBtn and deleteOptionBtn', () => {
    customRender(
      <Option
        id="0"
        index={0}
        optionValue=""
        onChangeOptionValueHandler={(): boolean => true}
        onClickDeleteOptionValueHandler={(): boolean => true}
        deleteOptionHandler={(): boolean => true}
        onBlurOptionHandler={(): boolean => true}
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
    customRender(
      <Option
        id="0"
        index={0}
        optionValue=""
        onChangeOptionValueHandler={(): boolean => true}
        onClickDeleteOptionValueHandler={(): boolean => true}
        deleteOptionHandler={mockDeleteFunction}
        onBlurOptionHandler={(): boolean => true}
        deletable
      />,
    );
    const deleteOptionBtn = screen.getByTestId('deleteOptionBtn');
    userEvent.click(deleteOptionBtn);
    expect(mockDeleteFunction).toBeCalledTimes(numberOfCalls);
  });
});
