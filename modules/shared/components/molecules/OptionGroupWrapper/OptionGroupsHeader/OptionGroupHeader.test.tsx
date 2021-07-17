import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OptionGroupsHeader from './OptionGroupHeader';

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

  it('should render default group header with the name "Group 0" and three dots icon used to edit that name or remove the group', () => {
    render(
      <OptionGroupsHeader
        id={miniSurveyState.groups[zero].id}
        index={zero}
        optionGroupName={miniSurveyState.groups[zero].name}
        deleteOptionsGroupHandler={(): boolean => true}
        updateOptionsGroupNameHandler={(): boolean => true}
      />,
    );
    expect(screen.getByText('Group 0')).toBeInTheDocument();
    expect(screen.getByTestId('editGroupButton')).toBeInTheDocument();
  });

  it('input name value being set correctly', () => {
    render(
      <OptionGroupsHeader
        id={miniSurveyState.groups[zero].id}
        index={zero}
        optionGroupName={miniSurveyState.groups[zero].name}
        deleteOptionsGroupHandler={(): boolean => true}
        updateOptionsGroupNameHandler={(): boolean => true}
      />,
    );
    const editGroupBtn = screen.getByTestId('editGroupButton');
    userEvent.click(editGroupBtn);
    const input = screen.getByPlaceholderText('Group name');
    userEvent.clear(input);
    userEvent.type(input, 'React');
    expect(input).toHaveValue('React');
  });

  it('clicking on addName Button causing the button itself being removed, name being set and three dot icon displays', () => {
    render(
      <OptionGroupsHeader
        id={miniSurveyState.groups[zero].id}
        index={zero}
        optionGroupName={miniSurveyState.groups[zero].name}
        deleteOptionsGroupHandler={(): boolean => true}
        updateOptionsGroupNameHandler={(): boolean => true}
      />,
    );

    const editGroupBtn = screen.getByTestId('editGroupButton');
    userEvent.click(editGroupBtn);
    const checkEditGroupBtn = screen.getByTestId('checkEditGroupButton');
    userEvent.click(checkEditGroupBtn);
  });

  it('should call remove group function once', () => {
    const deleteGroupMockedFunction = jest.fn();
    const once = 1;
    render(
      <OptionGroupsHeader
        id={miniSurveyState.groups[zero].id}
        index={2}
        optionGroupName={miniSurveyState.groups[zero].name}
        deleteOptionsGroupHandler={deleteGroupMockedFunction}
        updateOptionsGroupNameHandler={(): boolean => true}
      />,
    );
    const editGroupBtn = screen.getByTestId('editGroupButton');
    userEvent.click(editGroupBtn);
    const removeGroupBtn = screen.getByTestId('removeGroupButton');
    userEvent.click(removeGroupBtn);
    expect(deleteGroupMockedFunction).toBeCalledTimes(once);
  });
});
