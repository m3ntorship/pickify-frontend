import React from 'react';
import { render, screen } from '@testing-library/react';
import type { TargetElement } from '@testing-library/user-event';
import TabGroup from './TabGroup';
import { tabGroupData } from './data';

describe('TabGroup', () => {
  it('should render three tabs', () => {
    const setCheckedValue = jest.fn();

    const threeItems = 3;

    render(
      <TabGroup
        tabsData={tabGroupData()}
        checkedValue="Text Poll"
        setCheckedValue={setCheckedValue}
      />,
    );

    // envolved elements
    const tab: TargetElement[] = screen.getAllByTestId('tab');

    // assertions
    expect(tab).toHaveLength(threeItems);
  });

  it('should render checked Text Poll Tab and unChecked Image Poll and Mini Survey Tab', () => {
    const setCheckedValue = jest.fn();

    const firstItem = 0;
    const secondItem = 1;
    const thirdItem = 2;

    render(
      <TabGroup
        tabsData={tabGroupData()}
        checkedValue="Text Poll"
        setCheckedValue={setCheckedValue}
      />,
    );

    // envolved elements
    const inputRadio: TargetElement[] = screen.getAllByTestId('Radio');

    // assertions
    expect(inputRadio[firstItem]).not.toBeChecked();
    expect(inputRadio[secondItem]).toBeChecked();
    expect(inputRadio[thirdItem]).not.toBeChecked();
  });
});
