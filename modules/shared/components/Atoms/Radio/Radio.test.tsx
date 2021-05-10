import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Radio from '.';

describe('Testing Radio', () => {
  it('Testing Radio size Default', () => {
    const tree = renderer
      .create(<Radio size="default" disabled={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Testing Radio size Small', () => {
    const tree = renderer
      .create(<Radio size="small" disabled={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Testing Radio disabled', () => {
    const tree = renderer.create(<Radio disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Testing Radio with no props', () => {
    const tree = renderer.create(<Radio />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test('Expect Radio is not to be checked', () => {
  const { getByTestId } = render(<Radio />);
  expect(getByTestId('Radio')).not.toBeChecked();
});
test('Expect Radio is checked after clicking', () => {
  const { getByTestId } = render(<Radio />);
  userEvent.click(getByTestId('Radio'));
  expect(getByTestId('Radio')).toBeChecked();
});
test('Expect Radio is disabled', () => {
  const { getByTestId } = render(<Radio disabled />);
  expect(getByTestId('Radio')).toBeDisabled();
});
