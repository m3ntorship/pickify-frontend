import React from 'react';
import { render, screen } from '@testing-library/react';
import type { TargetElement } from '@testing-library/user-event';
import TabGroup from './TabGroup';

describe('TabGroup', () => {
  it('should render all tabs successfully', () => {
    const setCheckedValue = jest.fn();

    const firstItem = 0;

    render(
      <TabGroup checkedValue="Image Poll" setCheckedValue={setCheckedValue} />,
    );

    // envolved elements
    const tab: TargetElement[] = screen.getAllByTestId('tab');
    const icon: TargetElement = screen.getByTestId('image-poll-icon');

    // assumptions
    expect(tab[firstItem]).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('should render tabs without icon', () => {
    const setCheckedValue = jest.fn();

    render(
      <TabGroup
        onlyLabel
        checkedValue="Image Poll"
        setCheckedValue={setCheckedValue}
      />,
    );

    // envolved elements
    const icon = screen.queryByTestId('image-poll-icon') as HTMLOrSVGElement;

    // assumptions
    expect(icon).not.toBeInTheDocument();
  });
});
