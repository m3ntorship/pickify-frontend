import * as React from 'react';
import { render, screen } from '@testing-library/react';
import * as renderer from 'react-test-renderer';
import type { TargetElement } from '@testing-library/user-event';
import MiniSurveyViewOptions from './MiniSurveyViewOptions';
import { optionsGroups } from './data';

describe('MiniSurveyViewOptions component', () => {
  it('should render () OptionGroup when we apply ()', () => {
    const tree = renderer
      .create(
        <MiniSurveyViewOptions
          optionsGroups={optionsGroups}
          optionCheckedId="1"
          addOneVote={(): boolean => true}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render 3 Options when we apply options 3 length', () => {
    const numberOfOptions = 3;

    render(
      <MiniSurveyViewOptions
        optionsGroups={optionsGroups}
        optionCheckedId="1"
        addOneVote={(): boolean => true}
      />,
    );

    const option: TargetElement[] = screen.getAllByTestId('option');

    expect(option).toHaveLength(numberOfOptions);
  });
});
