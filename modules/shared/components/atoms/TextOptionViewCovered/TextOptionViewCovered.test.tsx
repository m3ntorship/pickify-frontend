import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextOptionViewCovered from './TextOptionViewCovered';

describe('Snapshot testing for OptionViewCoverd component', () => {
  it('Testing TextOptionViewCovered with the necessary props', () => {
    const tree = renderer
      .create(
        <TextOptionViewCovered
          id="test1"
          optionBody="option 1"
          letter="A"
          onOptionClick={(): string => {
            return 'test';
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Behavioural tests for TextOptionViewCovered component ', () => {
  const one = 1;
  it('should render "option 1 " as option body', () => {
    render(
      <TextOptionViewCovered
        id="test1"
        optionBody="option 1"
        letter="A"
        onOptionClick={(): string => {
          return 'test';
        }}
      />,
    );
    const testBtn = screen.getByText('option 1');
    expect(testBtn).toBeInTheDocument();
  });
  it('the option should be clicked once', () => {
    const handleClick = jest.fn();
    render(
      <TextOptionViewCovered
        id="test1"
        optionBody="option 1"
        letter="A"
        onOptionClick={handleClick}
      />,
    );
    const testBtn = screen.getByTestId('test1');
    userEvent.click(testBtn);
    expect(handleClick).toHaveBeenCalledTimes(one);
  });

  it('should be active while its covered', () => {
    const handleClick = jest.fn();
    render(
      <TextOptionViewCovered
        id="test1"
        optionBody="option 1"
        letter="A"
        onOptionClick={handleClick}
      />,
    );

    const testBtn = screen.getByTestId('test1');
    userEvent.click(testBtn);
    expect(handleClick).toBeCalled();
    expect(testBtn).toBeEnabled();
  });
});
