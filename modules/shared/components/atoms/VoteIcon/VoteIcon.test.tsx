import React from 'react';
import renderer from 'react-test-renderer';
import VoteIcon from './VoteIcon';

describe('snapshot testing', () => {
  it('should render heart button when oneImage is true', () => {
    const tree = renderer.create(<VoteIcon isOneImage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render two buttons when oneImage is true', () => {
    const tree = renderer.create(<VoteIcon isOneImage={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
