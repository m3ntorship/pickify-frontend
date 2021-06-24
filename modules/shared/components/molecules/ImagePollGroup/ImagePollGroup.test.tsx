import * as React from 'react';
import { render, screen } from '@testing-library/react';
import * as renderer from 'react-test-renderer';
import type { TargetElement } from '@testing-library/user-event';
import ImagePollGroup from './ImagePollGroup';
import { apiDummyData } from './data';

describe('OptionGroup component', () => {
  it('should render () OptionGroup when we apply ()', () => {
    const tree = renderer
      .create(<ImagePollGroup group={apiDummyData.group} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render 3 Options when we apply options 3 length', () => {
    const numberOfOptions = 3;

    render(<ImagePollGroup group={apiDummyData.group} />);

    const option: TargetElement[] = screen.getAllByTestId('image-poll-option');

    expect(option).toHaveLength(numberOfOptions);
  });
});
