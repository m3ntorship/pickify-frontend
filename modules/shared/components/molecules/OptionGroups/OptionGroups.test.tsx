import React from 'react';
import type { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm, FormProvider } from 'react-hook-form';
import OptionGroups from './OptionGroups';
import { configPostCreation } from '../../../configuration/ConfigPostCreation/config';

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

describe('optionGroups molecule', () => {
  it('assert the existing of the groups being passed ', () => {
    const groups = new Array(2).fill({
      id: 'G1',
      name: 'Group 1',
      options: [
        { id: '0', body: '' },
        { id: '1', body: '' },
      ],
    });

    customRender(
      <OptionGroups
        groups={groups}
        addOptionHandler={(): boolean => true}
        addOptionsGroupHandler={(): boolean => true}
        deleteOptionHandler={(): boolean => true}
        deleteOptionsGroupHandler={(): boolean => true}
        onBlurOptionHandler={(): boolean => true}
        onChangeOptionValueHandler={(): boolean => true}
        onClickDeleteOptionValueHandler={(): boolean => true}
        updateOptionsGroupNameHandler={(): boolean => true}
      />,
    );
    expect(screen.queryAllByTestId('optionGroup-wrapper')).toHaveLength(2);
  });

  it('clicking on addOptionGroup button', () => {
    const groups = new Array(2).fill({
      id: 'G1',
      name: 'Group 1',
      options: [
        { id: '0', body: '' },
        { id: '1', body: '' },
      ],
    });
    const onclick = jest.fn();
    customRender(
      <OptionGroups
        groups={groups}
        addOptionHandler={(): boolean => true}
        addOptionsGroupHandler={onclick}
        deleteOptionHandler={(): boolean => true}
        deleteOptionsGroupHandler={(): boolean => true}
        onBlurOptionHandler={(): boolean => true}
        onChangeOptionValueHandler={(): boolean => true}
        onClickDeleteOptionValueHandler={(): boolean => true}
        updateOptionsGroupNameHandler={(): boolean => true}
      />,
    );
    const addOptionGroup = screen.getByTestId('addOptionGroupBtn');
    userEvent.click(addOptionGroup);
    expect(onclick).toHaveBeenCalledTimes(1);
  });

  it('should not render the addOptionGroupBtn if the groups get to be equal to the maxOptionGroup ', () => {
    const { maxOptionGroup } = configPostCreation;

    const groups = new Array(maxOptionGroup).fill({
      id: 'G1',
      name: 'Group 1',
      options: [
        { id: '0', body: '' },
        { id: '1', body: '' },
      ],
    });
    customRender(
      <OptionGroups
        groups={groups}
        addOptionHandler={(): boolean => true}
        addOptionsGroupHandler={(): boolean => true}
        deleteOptionHandler={(): boolean => true}
        deleteOptionsGroupHandler={(): boolean => true}
        onBlurOptionHandler={(): boolean => true}
        onChangeOptionValueHandler={(): boolean => true}
        onClickDeleteOptionValueHandler={(): boolean => true}
        updateOptionsGroupNameHandler={(): boolean => true}
      />,
    );
    expect(screen.queryByText('Add Option Group')).toBeNull();
  });
});
