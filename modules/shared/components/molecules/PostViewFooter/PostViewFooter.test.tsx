import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostViewFooter from './Index';
import type { TargetElement } from '@testing-library/user-event';

describe('Testing PostViewFooter component with snapshot', () => {
  it('Testing PostViewFooter without the {voters} should have the votersPlaceHolder value ', () => {
    const tree = renderer
      .create(
        <PostViewFooter
          handleShareClick={(): boolean => {
            return true;
          }}
          votersPlaceHolder="test"
          id="test"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Testing PostViewFooter with the voters={100} should have voters number ', () => {
    const tree = renderer
      .create(
        <PostViewFooter
          handleShareClick={(): boolean => {
            return true;
          }}
          voters={100}
          votersPlaceHolder="test"
          id="test"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Misc', () => {
  it('should render Error Misc', () => {
    const mokingFunction = jest.fn();
    render(
      <PostViewFooter
        handleShareClick={mokingFunction}
        id="test"
        votersPlaceHolder="test"
      />,
    );
    const shareBtn: TargetElement = screen.getByTestId('test');
    userEvent.click(shareBtn);
    expect(mokingFunction).toBeCalled();
  });
});
