import React from 'react';
import { render, screen } from '@testing-library/react';
import type { TargetElement } from '@testing-library/user-event';
import TabGroup from './TabGroup';
import { tabGroupData } from './data';

describe('TabGroup', () => {
  it('should render all tabs successfully', () => {
    const setTabsData = jest.fn();

    const firstItem = 0;

    render(<TabGroup tabsData={tabGroupData()} setTabsData={setTabsData} />);

    // envolved elements
    const tab: TargetElement[] = screen.getAllByTestId('tab');

    // assumptions
    expect(tab[firstItem]).toBeInTheDocument();
  });
});
