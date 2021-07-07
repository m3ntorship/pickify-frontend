import React from 'react';
import { render, screen } from '@testing-library/react';
import type { TargetElement } from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import DropDown from './DropDown';
import { options } from './mockedOptions';

describe('DropDown', () => {
  it('should render the only menu icon with variant=[post]', () => {
    const mockedFn = jest.fn();
    const tree = renderer
      .create(
        <DropDown
          onOptionMenuClick={mockedFn}
          options={options}
          variant="post"
          size="sm"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render the only menu icon with variant=[image]', () => {
    const mockedFn = jest.fn();
    const tree = renderer
      .create(
        <DropDown
          onOptionMenuClick={mockedFn}
          options={options}
          variant="image"
          size="sm"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render three menu items when passing three options and clicking on menu icon', () => {
    const threeMenuItems = 3;

    const mockedFn = jest.fn();
    render(
      <DropDown
        onOptionMenuClick={mockedFn}
        options={options}
        variant="post"
        size="sm"
      />,
    );

    const menuIcon: TargetElement = screen.getByTestId('menu-icon');

    userEvent.click(menuIcon);

    const menuButtons: TargetElement[] = screen.getAllByTestId('menu-button');
    const menu: TargetElement = screen.getByTestId('menu');

    expect(menu).toBeInTheDocument();
    expect(menuButtons).toHaveLength(threeMenuItems);
  });

  it('should call onOptionMenuClick when clicking on the menu button', () => {
    const firstButton = 0;
    const calledOnce = 1;

    const mockedFn = jest.fn();
    render(
      <DropDown
        onOptionMenuClick={mockedFn}
        options={options}
        variant="post"
        size="sm"
      />,
    );

    const menuIcon: TargetElement = screen.getByTestId('menu-icon');

    userEvent.click(menuIcon);

    const menuButtons: TargetElement[] = screen.getAllByTestId('menu-button');

    userEvent.click(menuButtons[firstButton]);

    expect(mockedFn).toHaveBeenCalledTimes(calledOnce);
  });
});
