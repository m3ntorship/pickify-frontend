import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { TargetElement } from '@testing-library/user-event';
import TabGroup from './TabGroup';

describe('TabGroup', () => {
  it('should render all tabs successfully', () => {
    const firstItem = 0;

    render(<TabGroup />);

    // envolved elements
    const radioLabel: TargetElement[] = screen.getAllByTestId('tab');

    // assumptions
    expect(radioLabel[firstItem]).toBeInTheDocument();
  });

  it('should change input values when click on radio input', () => {
    const firstItem = 0;
    const secondItem = 1;

    render(<TabGroup />);

    // envolved elements
    const radioInput: TargetElement[] = screen.getAllByTestId('Radio');
    const radioLabel: TargetElement[] = screen.getAllByTestId('tab');

    // events
    userEvent.click(radioInput[secondItem]);

    // assumptions
    expect(radioLabel[firstItem]).toHaveAttribute('data-value', 'not-checked');
    expect(radioLabel[secondItem]).toHaveAttribute('data-value', 'checked');
    // expect(radioLabel[secondItem].prop('data-value')).to.equal('checked');
    // expect(radioLabel[firstItem].prop('data-value')).to.equal('not-checked');
    // expect(radioLabel[secondItem]).toHaveClass('checked');
    // expect(radioLabel[firstItem]).toHaveFormValues('not-checked');
  });
});
