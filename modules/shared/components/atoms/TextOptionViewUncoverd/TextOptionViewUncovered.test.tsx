import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import TextOptionViewUncoverd from './TextOptionViewUncoverd';

describe('Snapshot testing for OptionViewUncoverd component', () => {
  const twenty = 20;
  it('should have class of bg-primary-shd1 while Testing OptionViewUncoverd with mostVoted to true', () => {
    const tree = renderer
      .create(
        <TextOptionViewUncoverd
          id="test1"
          optionBody="option 1"
          letter="A"
          percentage={twenty}
          mostVoted
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have checkmark svg while Testing OptionViewUncoverd with the necessary props with isOptionChecked={true}', () => {
    const tree = renderer
      .create(
        <TextOptionViewUncoverd
          id="test1"
          optionBody="option 1"
          letter="A"
          percentage={twenty}
          isOptionChecked
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Behavioural tests for OptionViewUncoverd component ', () => {
  const twenty = 20;
  it('should render "option 1 " as option body', () => {
    render(
      <TextOptionViewUncoverd id="test1" optionBody="option 1" letter="A" />,
    );
    const testBtn = screen.getByText('option 1');
    expect(testBtn).toBeInTheDocument();
  });

  it('should render "20%" as percentage', () => {
    render(
      <TextOptionViewUncoverd
        id="test1"
        optionBody="option 1"
        percentage={twenty}
        letter="A"
      />,
    );
    const testBtn = screen.getByText('20%');
    expect(testBtn).toBeInTheDocument();
  });

  it('should be disabled  while its uncovered', () => {
    render(
      <TextOptionViewUncoverd id="test1" optionBody="option 1" letter="A" />,
    );

    const testBtn = screen.getByTestId('test1');
    expect(testBtn).toBeDisabled();
  });
});
