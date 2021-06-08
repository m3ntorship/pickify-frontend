import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('should render Navigation component with notFilled avatar and Vertical divider', () => {
    const tree = renderer.create(<Navigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Navigation component with filled avatar and Vertical divider', () => {
    const tree = renderer
      .create(
        <Navigation profilePic="https://s3-alpha-sig.figma.com/img/bca2/a158/41e1bfef4cf69aa4eaf61bcf92bdc41e?Expires=1621814400&Signature=g1~ynzLSFHQBtm~L1m8FhXmegn9-EkFxI0g9koIDybycd9W9RgJBMrTDShvExuRlD1aPo4g8HTmMhKV6j~DcTgLDzaVP4-cH-3CRt-HQOdzpaAYFMUIM5RMNA1XygIUyHOKrSpf9aWqdIZ4Xj13qCtOY1pUNVPIJyWtkgyEJFn5v65S4vN3ijwX0e7DeweUqJmt4mop98hrZ~mMgKVvZfa43rwPz-UPg9QHTXinuha1AOsVpcLwJIOiBLXfjm79vL776mWQfLjz~pKA~43ynBJ7S1Uu3nWxRsOSKvSZFfx7QnlLSOsBaxPn2ZJx5cY76BLsz0O7BDbS8aFmBFdsJCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
