import * as React from 'react';
import { render, screen } from '@testing-library/react';
import * as renderer from 'react-test-renderer';
import type { TargetElement } from '@testing-library/user-event';
import TextPollViewOptions from './TextPollViewOptions';
import { apiDummyData } from './data';

describe('TextPollViewOptions component', () => {
  it('should render () OptionGroup when we apply ()', () => {
    const mockedFn = jest.fn();
    const tree = renderer
      .create(
        <TextPollViewOptions
          optionCheckedId="1"
          isOptionChecked
          onOptionClick={mockedFn}
          optionsGroups={apiDummyData.options_groups}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render 3 Options when we apply options 3 length', () => {
    const mockedFn = jest.fn();
    const numberOfOptions = 3;

    render(
      <TextPollViewOptions
        optionCheckedId="1"
        isOptionChecked
        onOptionClick={mockedFn}
        optionsGroups={apiDummyData.options_groups}
      />,
    );

    const option: TargetElement[] = screen.getAllByTestId('option');

    expect(option).toHaveLength(numberOfOptions);
  });
});
