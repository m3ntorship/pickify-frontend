import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { TargetElement } from '@testing-library/user-event';
import TextPoll from '.';

describe('Testing textPoll component with snapshot', () => {
  it('Testing TextPoll with the necessary props should not have letter', () => {
    const tree = renderer
      .create(
        <TextPoll
          option="Option one"
          showResult={false}
          id="testId1"
          onOptionClick={(): string => {
            return 'test';
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Testing TextPoll with the necessary props and isCheck={true} should have checked svg', () => {
    const tree = renderer
      .create(
        <TextPoll
          option="Option one"
          showResult={false}
          id="testId1"
          onOptionClick={(): string => {
            return 'test';
          }}
          isChecked
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Testing TextPoll with the necessary props and mostVoted={true} showResult={true} should have class of bg-primary-shd1 ', () => {
    const tree = renderer
      .create(
        <TextPoll
          option="Option one"
          id="testId1"
          onOptionClick={(): string => {
            return 'test';
          }}
          showResult
          mostVoted
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Testing TextPoll with the necessary props and letter="a" should have <span>A</span> ', () => {
    const tree = renderer
      .create(
        <TextPoll
          option="Option one"
          showResult={false}
          id="testId1"
          onOptionClick={(): string => {
            return 'test';
          }}
          mostVoted
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Testing TextPoll with the necessary props and showResult={true} percentage={20} should have <span>20%</span> ', () => {
    const tree = renderer
      .create(
        <TextPoll
          option="Option one"
          showResult
          id="testId1"
          percentage={20}
          onOptionClick={(): string => {
            return 'test';
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing textPoll component with react testing library', () => {
  it('should be clicked once', () => {
    const handleClick = jest.fn();
    render(
      <TextPoll
        letter="a"
        option="Option one"
        showResult={false}
        id="test"
        onOptionClick={handleClick}
      />,
    );
    const testBtn: TargetElement = screen.getByTestId('test');
    const calledOnce = 1;
    userEvent.click(testBtn);
    expect(handleClick).toHaveBeenCalledTimes(calledOnce);
  });
  it('should be disabled (not active) ', () => {
    const handleClick = jest.fn();
    render(
      <TextPoll
        letter="a"
        option="Option one"
        showResult
        id="test"
        onOptionClick={handleClick}
      />,
    );

    const testBtn: TargetElement = screen.getByTestId('test');
    userEvent.click(testBtn);
    expect(handleClick).not.toBeCalled();
    expect(testBtn).toBeDisabled();
  });
});
