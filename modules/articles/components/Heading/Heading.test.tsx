import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import type { TargetElement } from '@testing-library/user-event';
import Heading from './index';

describe('example of a test suite', () => {
  it('example of single test', () => {
    const tree = renderer.create(<Heading text="hi" />);
    expect(tree).toMatchSnapshot();
  });

  it('h2 should have color red', () => {
    const { getByTestId } = render(<Heading text="hi" toBeRed />);

    const h2Element: TargetElement = getByTestId('h2-element');

    expect(h2Element).toHaveClass('text_red');
  });
});
