import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { TargetElement } from '@testing-library/user-event';
import Privacy from './index';

describe('Privacy Component with snapshot', () => {
  it('should render with no options on the select when giving it empty array without a divider', () => {
    const tree = renderer
      .create(
        <Privacy
          privacyOptions={[]}
          withDivider={false}
          togglerIsChecked={false}
          handleTogglerChange={(): boolean => {
            return true;
          }}
          handleSelectChange={(): boolean => {
            return true;
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Privacy Component with react testing library', () => {
  it('checks if the divider in the dom if given prop widthDivider={true}', () => {
    render(
      <Privacy
        privacyOptions={[]}
        withDivider
        togglerIsChecked={false}
        handleTogglerChange={(): boolean => {
          return true;
        }}
        handleSelectChange={(): boolean => {
          return true;
        }}
      />,
    );
    const divider: TargetElement = screen.getByTestId('dividerTestId');
    expect(divider).toBeInTheDocument();
  });
  it('checks if the options in the dom if given prop privacyOptions={["family", "friends"]}', () => {
    render(
      <Privacy
        privacyOptions={['family', 'friends']}
        withDivider
        togglerIsChecked={false}
        handleTogglerChange={(): boolean => {
          return true;
        }}
        handleSelectChange={(): boolean => {
          return true;
        }}
      />,
    );
    const familyOption: TargetElement = screen.getByTestId('family');
    const friendsOption: TargetElement = screen.getByTestId('friends');
    expect(familyOption).toBeInTheDocument();
    expect(friendsOption).toBeInTheDocument();
  });
  it('should be clicked once', () => {
    const handleClick = jest.fn();
    render(
      <Privacy
        privacyOptions={['family', 'friends']}
        withDivider={false}
        togglerIsChecked={false}
        handleTogglerChange={handleClick}
        handleSelectChange={handleClick}
      />,
    );
    const checkbox: TargetElement = screen.getByTestId('hideMyIdentityToggler');
    const calledonce = 1;
    userEvent.click(checkbox);
    expect(handleClick).toHaveBeenCalledTimes(calledonce);
    expect(checkbox).toBeChecked();
  });
  it('Simulates selection first choise', () => {
    const handleChange = jest.fn();
    const calledOnce = 1;
    const { getByTestId } = render(
      <Privacy
        privacyOptions={['family', 'friends']}
        withDivider={false}
        togglerIsChecked={false}
        handleTogglerChange={handleChange}
        handleSelectChange={handleChange}
      />,
    );
    userEvent.selectOptions(getByTestId('selectTestId'), ['family']);
    const option1 = getByTestId('family') as HTMLOptionElement;
    const option2 = getByTestId('friends') as HTMLOptionElement;
    expect(handleChange).toBeCalledTimes(calledOnce);
    expect(option1.selected).toBe(true);
    expect(option2.selected).toBe(false);
  });
  it('Simulates selection secound choise', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <Privacy
        privacyOptions={['family', 'friends']}
        withDivider={false}
        togglerIsChecked={false}
        handleTogglerChange={handleChange}
        handleSelectChange={handleChange}
      />,
    );
    userEvent.selectOptions(getByTestId('selectTestId'), ['friends']);
    const option1 = getByTestId('family') as HTMLOptionElement;
    const option2 = getByTestId('friends') as HTMLOptionElement;
    expect(option1.selected).toBe(false);
    expect(option2.selected).toBe(true);
  });
});
