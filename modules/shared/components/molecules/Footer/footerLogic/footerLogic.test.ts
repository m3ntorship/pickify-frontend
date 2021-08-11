import {
  getItemsWidth,
  getNumberOfVisibleElements,
  getTotalItemsWidth,
  getTotalSpacing,
} from './footerLogic';

describe('getTotalSpacing', () => {
  it('should return total margin of the number of links + the footer padding', () => {
    const totalSpacing = getTotalSpacing(3);

    const expectedRes = 48;

    expect(totalSpacing).toEqual(expectedRes);
  });
});

describe('getItemsWidth', () => {
  it('should return an array of each element width', () => {
    const elements = [
      { offsetWidth: 12 },
      { offsetWidth: 20 },
      { offsetWidth: 25 },
    ];

    const itemsWidth = getItemsWidth(elements);

    const expectedRes = [12, 20, 25];

    expect(itemsWidth).toEqual(expectedRes);
  });
});

describe('getTotalItemsWidth', () => {
  it('should return the total width of each link + total margin', () => {
    const elementsWidth = [12, 20, 25];

    const totalSpacing = 48;

    const totalItemsWidth = getTotalItemsWidth(elementsWidth, totalSpacing);

    const expectedRes = 105;

    expect(totalItemsWidth).toEqual(expectedRes);
  });
});

describe('getNumberOfVisibleElements', () => {
  it('should return the total width of each link + total margin', () => {
    const elements = [
      { offsetWidth: 12 },
      { offsetWidth: 20 },
      { offsetWidth: 25 },
    ];

    const listWidth = 50;

    const buttonWdith = 20;

    const visibleElements = getNumberOfVisibleElements(
      elements,
      listWidth,
      buttonWdith,
    );

    const expectedRes = 1;

    expect(visibleElements).toEqual(expectedRes);
  });
});
