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
  it('should return 2 elements when the list parent width equals the width of the fist 2 links + their margin + the button width', () => {
    const elements = [
      { offsetWidth: 12 },
      { offsetWidth: 20 },
      { offsetWidth: 25 },
    ];

    const listWidth = 76;

    const buttonWdith = 20;

    const visibleElements = getNumberOfVisibleElements(
      elements,
      listWidth,
      buttonWdith,
    );

    const expectedRes = 2;

    expect(visibleElements).toEqual(expectedRes);
  });

  it('should return 2 elements when the list parent width is greater than the width of the fist 2 links but less than 3 links', () => {
    const elements = [
      { offsetWidth: 12 },
      { offsetWidth: 20 },
      { offsetWidth: 25 },
    ];

    const listWidth = 85;

    const buttonWdith = 20;

    const visibleElements = getNumberOfVisibleElements(
      elements,
      listWidth,
      buttonWdith,
    );

    const expectedRes = 2;

    expect(visibleElements).toEqual(expectedRes);
  });

  it('should return 1 element when the difference between the the list parent width and the first 2 links is only 1 px to ensure that the design is not going to break in this case', () => {
    const elements = [
      { offsetWidth: 12 },
      { offsetWidth: 20 },
      { offsetWidth: 25 },
    ];

    const listWidth = 75;

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
