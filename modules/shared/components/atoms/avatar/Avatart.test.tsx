import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Avatar, { determineImageSize } from '.';

describe('Avatar', () => {
  it('make sure that imageSize works correctly', () => {
    const small = 32;
    const medium = 40;
    const large = 56;
    const smallSize = determineImageSize('small');
    expect(smallSize).toEqual(small);
    const mediumSize = determineImageSize('medium');
    expect(mediumSize).toEqual(medium);
    const largeSize = determineImageSize('large');
    expect(largeSize).toEqual(large);
  });

  it('renders with large size and filled variant', () => {
    const tree = renderer.create(
      <Avatar
        size="large"
        variant="filled"
        imgSrc="https://s3-alpha-sig.figma.com/img/bca2/a158/41e1bfef4cf69aa4eaf61bcf92bdc41e?Expires=1621814400&Signature=g1~ynzLSFHQBtm~L1m8FhXmegn9-EkFxI0g9koIDybycd9W9RgJBMrTDShvExuRlD1aPo4g8HTmMhKV6j~DcTgLDzaVP4-cH-3CRt-HQOdzpaAYFMUIM5RMNA1XygIUyHOKrSpf9aWqdIZ4Xj13qCtOY1pUNVPIJyWtkgyEJFn5v65S4vN3ijwX0e7DeweUqJmt4mop98hrZ~mMgKVvZfa43rwPz-UPg9QHTXinuha1AOsVpcLwJIOiBLXfjm79vL776mWQfLjz~pKA~43ynBJ7S1Uu3nWxRsOSKvSZFfx7QnlLSOsBaxPn2ZJx5cY76BLsz0O7BDbS8aFmBFdsJCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('renders with medium size and filled variant', () => {
    const tree = renderer.create(
      <Avatar
        size="medium"
        variant="filled"
        imgSrc="https://s3-alpha-sig.figma.com/img/bca2/a158/41e1bfef4cf69aa4eaf61bcf92bdc41e?Expires=1621814400&Signature=g1~ynzLSFHQBtm~L1m8FhXmegn9-EkFxI0g9koIDybycd9W9RgJBMrTDShvExuRlD1aPo4g8HTmMhKV6j~DcTgLDzaVP4-cH-3CRt-HQOdzpaAYFMUIM5RMNA1XygIUyHOKrSpf9aWqdIZ4Xj13qCtOY1pUNVPIJyWtkgyEJFn5v65S4vN3ijwX0e7DeweUqJmt4mop98hrZ~mMgKVvZfa43rwPz-UPg9QHTXinuha1AOsVpcLwJIOiBLXfjm79vL776mWQfLjz~pKA~43ynBJ7S1Uu3nWxRsOSKvSZFfx7QnlLSOsBaxPn2ZJx5cY76BLsz0O7BDbS8aFmBFdsJCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('renders with small size and filled variant', () => {
    const tree = renderer.create(
      <Avatar
        size="small"
        variant="filled"
        imgSrc="https://s3-alpha-sig.figma.com/img/bca2/a158/41e1bfef4cf69aa4eaf61bcf92bdc41e?Expires=1621814400&Signature=g1~ynzLSFHQBtm~L1m8FhXmegn9-EkFxI0g9koIDybycd9W9RgJBMrTDShvExuRlD1aPo4g8HTmMhKV6j~DcTgLDzaVP4-cH-3CRt-HQOdzpaAYFMUIM5RMNA1XygIUyHOKrSpf9aWqdIZ4Xj13qCtOY1pUNVPIJyWtkgyEJFn5v65S4vN3ijwX0e7DeweUqJmt4mop98hrZ~mMgKVvZfa43rwPz-UPg9QHTXinuha1AOsVpcLwJIOiBLXfjm79vL776mWQfLjz~pKA~43ynBJ7S1Uu3nWxRsOSKvSZFfx7QnlLSOsBaxPn2ZJx5cY76BLsz0O7BDbS8aFmBFdsJCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      />,
    );
    expect(tree).toMatchSnapshot();
  });

  it('renders with large size and anonymous variant', () => {
    const tree = renderer.create(<Avatar size="large" variant="anonymous" />);
    expect(tree).toMatchSnapshot();
  });

  it('renders with medium size and anonymous variant', () => {
    const tree = renderer.create(<Avatar size="medium" variant="anonymous" />);
    expect(tree).toMatchSnapshot();
  });

  it('renders with small size and anonymous variant', () => {
    const tree = renderer.create(<Avatar size="small" variant="anonymous" />);
    expect(tree).toMatchSnapshot();
  });

  it('renders with large size and not filled variant', () => {
    const tree = renderer.create(<Avatar size="large" variant="notFilled" />);
    expect(tree).toMatchSnapshot();
  });

  it('renders with medium size and not filled variant', () => {
    const tree = renderer.create(<Avatar size="medium" variant="notFilled" />);
    expect(tree).toMatchSnapshot();
  });

  it('renders with small size and not filled variant', () => {
    const tree = renderer.create(<Avatar size="small" variant="notFilled" />);
    expect(tree).toMatchSnapshot();
  });
});
