import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Toggler from './index';

describe('Toggler Component with snapshot', () => {
  it('should render classnames include (w-7 h-4) and (opacity-25) when passing disabled={true} and size=sm ', () => {
    const tree = renderer
      .create(
        <Toggler
          size="sm"
          disabled
          checked={false}
          id="test"
          onChange={(): boolean => {
            return true;
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render classnames include (w-7 h-4) and do NOT include (opacity-25) when passing disabled={false} and size=sm ', () => {
    const tree = renderer
      .create(
        <Toggler
          size="sm"
          checked={false}
          id="test"
          onChange={(): boolean => {
            return true;
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render include (w-sm h-6) and classnames include (opacity-25) when passing disabled={true} and size=default ', () => {
    const tree = renderer
      .create(
        <Toggler
          size="default"
          disabled
          checked={false}
          id="test"
          onChange={(): boolean => {
            return true;
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render include (w-sm h-6) and classnames do NOT include (opacity-25) when passing disabled={false} and size=default ', () => {
    const tree = render(
      <Toggler
        size="default"
        checked={false}
        id="test"
        onChange={(): boolean => {
          return true;
        }}
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
describe('Toggler Component with react testing library', () => {
  it('should be clicked once', () => {
    const handleClick = jest.fn();
    render(
      <Toggler size="sm" checked={false} id="test" onChange={handleClick} />,
    );
    const checkbox = screen.getByTestId('test') as HTMLInputElement;
    const calledonce = 1;
    userEvent.click(checkbox);
    expect(handleClick).toHaveBeenCalledTimes(calledonce);
    expect(checkbox.checked).toEqual(true);
  });
});
