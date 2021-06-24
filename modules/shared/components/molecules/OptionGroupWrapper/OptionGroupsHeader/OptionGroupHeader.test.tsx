import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OptionGroupsHeader from './OptionGroupHeader';

describe('OptionGroupHeader', () => {
  const first = 0;
  const second = 1;
  const miniSurveyState = {
    postType: 'MiniSurvey Poll',
    postCaption: { id: 'id_123181239', value: '' },
    groups: [
      {
        id: '0',
        groupName: '',
        options: [
          { id: '0', value: '' },
          { id: '0', value: '' },
        ],
      },
    ],
    hiddenIdentity: false,
    privacy: 'friends',
    image: '',
  };

  it('As default if this is the firt group, render with an empty groupName value and addName button but without the group remove button', () => {
    render(
      <OptionGroupsHeader
        groupIndex={first}
        groupId="0"
        setMiniSurveyState={(): void => undefined}
        miniSurveyState={miniSurveyState}
      />,
    );
    expect(screen.getByPlaceholderText('Group name')).toBeInTheDocument();
    expect(screen.getByTestId('addGroupName-button')).toBeInTheDocument();
    expect(screen.queryByTestId('removeGroup-button')).not.toBeInTheDocument();
  });

  it('As default if this is NOT the firt group, render with an empty groupName value but WITH the group remove button and addName button', () => {
    render(
      <OptionGroupsHeader
        groupIndex={second}
        groupId="1"
        setMiniSurveyState={(): void => undefined}
        miniSurveyState={miniSurveyState}
      />,
    );
    expect(screen.getByPlaceholderText('Group name')).toBeInTheDocument();
    expect(screen.getByTestId('addGroupName-button')).toBeInTheDocument();
    expect(screen.getByTestId('removeGroup-button')).toBeInTheDocument();
  });

  it('input name value being set correctly', () => {
    render(
      <OptionGroupsHeader
        groupIndex={first}
        groupId="0"
        setMiniSurveyState={(): void => undefined}
        miniSurveyState={miniSurveyState}
      />,
    );
    const input = screen.getByPlaceholderText('Group name');
    userEvent.type(input, 'React');
    expect(input).toHaveValue('React');
  });

  it('clicking on addName Button causing the button itself being removed, name being set and three dot icon displays', () => {
    render(
      <OptionGroupsHeader
        groupIndex={first}
        groupId="0"
        setMiniSurveyState={(): void => undefined}
        miniSurveyState={miniSurveyState}
      />,
    );
    const input = screen.getByPlaceholderText('Group name');
    userEvent.type(input, 'React');
    userEvent.click(screen.getByTestId('addGroupName-button'));

    expect(screen.queryByTestId('addGroupName-button')).not.toBeInTheDocument();
    expect(input).not.toBeInTheDocument();
    expect(screen.queryByTestId('removeGroup-button')).not.toBeInTheDocument();
    expect(screen.getByTestId('inputName-text')).toHaveTextContent('React');
    expect(screen.getByTestId('three-dots')).toBeInTheDocument();
  });

  it('after clicking on addName Button and three dot icon displays, clicking on three dot icon causing it to be removed and groupName input and addName button as well as removeGroup button (if its not the first group) get back into the document', () => {
    render(
      <OptionGroupsHeader
        groupIndex={second}
        groupId="1"
        setMiniSurveyState={(): void => undefined}
        miniSurveyState={miniSurveyState}
      />,
    );
    const input = screen.getByPlaceholderText('Group name');
    userEvent.type(input, 'React');
    userEvent.click(screen.getByTestId('addGroupName-button'));

    expect(screen.getByTestId('three-dots')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('three-dots'));

    expect(screen.queryByTestId('three-dots')).not.toBeInTheDocument();
    expect(screen.getByDisplayValue('React')).toBeInTheDocument();
    expect(screen.getByTestId('addGroupName-button')).toBeInTheDocument();
    expect(screen.getByTestId('removeGroup-button')).toBeInTheDocument();
  });
});
