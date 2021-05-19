import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from './index';

describe('Snapshot tests for Checkbox component', () => {
  it('Testing Checkbox size Default and not disabled', () => {
    const tree = renderer
      .create(<Checkbox size="Default" disabled={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Testing Checkbox size Small and not disabled', () => {
    const tree = renderer
      .create(<Checkbox size="Small" disabled={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Testing Checkbox size Default and disabled true', () => {
    const tree = renderer.create(<Checkbox size="Default" disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Testing Checkbox size Small and  disabled true', () => {
    const tree = renderer.create(<Checkbox size="Small" disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Behavioral tests for Checkbox', () => {
  it("check if it's not clicked/checked as default", () => {
    render(<Checkbox size="Default" disabled={false} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('Checkbox not clicked while it is disabled', () => {
    const mockClick = jest.fn();
    render(<Checkbox size="Default" disabled onMockClick={mockClick} />);
    const input = screen.getByTestId('input-test');
    userEvent.click(input);
    const zero = 0;
    expect(mockClick).toHaveBeenCalledTimes(zero);
  });
});
