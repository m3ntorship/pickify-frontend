import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PostFooterCreation from './PostFooterCreation';

describe('Testing Footer with snapshot', () => {
  it('Testing Footer with required props', () => {
    const tree = renderer
      .create(
        <PostFooterCreation
          handleSelectChange={(): boolean => {
            return true;
          }}
          togglerIsChecked
          handleTogglerChange={(): boolean => {
            return true;
          }}
          disabled
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Testing Footer with required props', () => {
    const tree = renderer
      .create(
        <PostFooterCreation
          handleSelectChange={(): boolean => {
            return true;
          }}
          togglerIsChecked
          handleTogglerChange={(): boolean => {
            return true;
          }}
          disabled={false}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
