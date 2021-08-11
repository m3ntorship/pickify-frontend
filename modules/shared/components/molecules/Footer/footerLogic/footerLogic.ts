/**
 * here is the logic that will determine when we will display the button with text more based on the footer width
 */

/**
 * getTotalSpacing accepts the number footer links and returns total margins and padding
  @params number of Links
 */
export const getTotalSpacing = (linksLength: number): number =>
  (linksLength + 1) * 12;

/**
 * getItemsWidth accepts all the footer links and returns array of each element width
 @params Array<links>
 */
export const getItemsWidth = (
  footerLinks: { offsetWidth: number }[],
): number[] => {
  const linksWidth = footerLinks.map((item): number => item.offsetWidth);

  return linksWidth;
};

/**
 * getTotalItemsWidth accepts array of each element width and the total margins and returns total linksWidth + total margin
 * @params Array<ElementWidth> totalMargin
 */
export const getTotalItemsWidth = (
  linksWidth: number[],
  totalSpacing: number,
): number => {
  const totalWidth: number = linksWidth.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    totalSpacing,
  );

  return totalWidth;
};

/**
 * getNumberOfVisibleElements accepts the footer links and the list width and button width with text more
 * returns the number of elements that will be shown
 * @params Array<links> listWidth buttonWidth
 */
export const getNumberOfVisibleElements = (
  footerLinks: { offsetWidth: number }[],
  listWidth: number,
  buttonWidth: number,
): number => {
  let maxWidth = buttonWidth;
  let visibleLinks = 0;

  footerLinks.map((item) => {
    // check if links width has reached the maximum of the list width and if not increase the visible links to show them
    if (maxWidth < listWidth) {
      visibleLinks += 1;
      maxWidth += item.offsetWidth + 12; // the link width + the margin
    }
    return item;
  });
  // if there was a free space in the list width but it's not enough for the last visible link then we will remove it
  if (maxWidth > listWidth) {
    visibleLinks -= 1;
  }

  return visibleLinks;
};
