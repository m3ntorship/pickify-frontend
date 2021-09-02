import type { ReactElement } from 'react';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormProvider, useForm } from 'react-hook-form';
import OptionGroupsHeader from './OptionGroupHeader';

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

const zero = 0;
describe('OptionGroupHeader', () => {
  const miniSurveyState = {
    postType: 'MiniSurvey Poll',
    postCaption: { id: 'id_123181239', body: '', media: [] },
    groups: [
      {
        id: '0',
        name: '',
        options: [
          { id: '0', body: '', media: [] },
          { id: '0', body: '', media: [] },
        ],
      },
    ],
    hiddenIdentity: false,
    privacy: 'friends',
    image: '',
  };

  it("should render default group header with the group's question", () => {
    customRender(
      <OptionGroupsHeader
        id={miniSurveyState.groups[zero].id}
        index={zero}
        optionGroupName={miniSurveyState.groups[zero].name}
        deleteOptionsGroupHandler={(): boolean => true}
        onChangeOptionsGroupNameValue={(): boolean => true}
        onClickDeleteOptionsGroupNameValueHandler={(): boolean => true}
      />,
    );
    expect(
      screen.getAllByPlaceholderText('Enter your group’s question'),
    ).toHaveLength(1);
  });

  it("should call the function that updates the value of the group's question ", () => {
    const updateInputValue = jest.fn();
    customRender(
      <OptionGroupsHeader
        id={miniSurveyState.groups[zero].id}
        index={zero}
        optionGroupName={miniSurveyState.groups[zero].name}
        deleteOptionsGroupHandler={(): boolean => true}
        onChangeOptionsGroupNameValue={updateInputValue}
        onClickDeleteOptionsGroupNameValueHandler={(): boolean => true}
      />,
    );
    const input = screen.getByPlaceholderText('Enter your group’s question');
    userEvent.type(input, 'Test');
    expect(updateInputValue).toBeCalledTimes(4);
  });
});
