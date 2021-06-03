import * as React from 'react';
import { render, screen } from '@testing-library/react';
import * as renderer from 'react-test-renderer';
import type { TargetElement } from '@testing-library/user-event';
import OptionGroup from './OptionGroup';
import { apiDummyData } from './data';

describe('OptionGroup component', () => {
  it('should render () OptionGroup when we apply ()', () => {
    const tree = renderer
      .create(
        <OptionGroup
          optionsGroups={apiDummyData.options_groups}
          caption={apiDummyData.caption}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render 3 Options when we apply options 3 length', () => {
    const numberOfOptions = 3;

    render(
      <OptionGroup
        optionsGroups={apiDummyData.options_groups}
        caption={apiDummyData.caption}
      />,
    );

    const option: TargetElement[] = screen.getAllByTestId('option');

    expect(option).toHaveLength(numberOfOptions);
  });
});
