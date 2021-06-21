import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { TargetElement } from '@testing-library/user-event';
import { EPostType } from '../../../types/postFeed/EPostType';
import TabGroup from './TabGroup';
import { tabGroupData } from './data';

describe('TabGroup', () => {
  it('should render three tabs', () => {
    const changeValHandler = jest.fn();

    const threeItems = 3;

    render(
      <TabGroup
        tabsData={tabGroupData()}
        checkedValue={EPostType.TextPoll}
        changeValHandler={changeValHandler}
      />,
    );

    // envolved elements
    const tab: TargetElement[] = screen.getAllByTestId('tab');

    // assertions
    expect(tab).toHaveLength(threeItems);
  });

  it('should render checked Text Poll Tab and unChecked Image Poll and Mini Survey Tab', () => {
    const changeValHandler = jest.fn();

    const firstItem = 0;
    const secondItem = 1;
    const thirdItem = 2;

    render(
      <TabGroup
        tabsData={tabGroupData()}
        checkedValue={EPostType.TextPoll}
        changeValHandler={changeValHandler}
      />,
    );

    // envolved elements
    const inputRadio: TargetElement[] = screen.getAllByTestId('Radio');

    // assertions
    expect(inputRadio[firstItem]).not.toBeChecked();
    expect(inputRadio[secondItem]).toBeChecked();
    expect(inputRadio[thirdItem]).not.toBeChecked();
  });

  it('should call changeValHandler once', () => {
    const changeValHandler = jest.fn();

    const calledOnce = 1;
    const thirdItem = 2;

    render(
      <TabGroup
        tabsData={tabGroupData()}
        checkedValue={EPostType.TextPoll}
        changeValHandler={changeValHandler}
      />,
    );

    // envolved elements
    const tab: TargetElement[] = screen.getAllByTestId('tab');

    // assertions
    userEvent.click(tab[thirdItem]);
    expect(changeValHandler).toHaveBeenCalledTimes(calledOnce);
  });
});
