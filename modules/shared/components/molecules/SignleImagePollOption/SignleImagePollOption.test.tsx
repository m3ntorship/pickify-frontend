import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SignleImagePollOption from './SignleImagePollOption';
import { covoredOptions, unCovoredOptions } from './mockedOptions';

describe('SignleImagePollOption', () => {
  it('should render covored like and dislike icons when passing covored options', () => {
    const tree = renderer
      .create(
        <SignleImagePollOption
          options={covoredOptions}
          imageUrl="https://source.unsplash.com/random"
          groupName="caption"
          onOptionClick={(): boolean => true}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render uncovored like and dislike icons when passing uncovored options', () => {
    const tree = renderer
      .create(
        <SignleImagePollOption
          options={unCovoredOptions}
          imageUrl="https://source.unsplash.com/random"
          groupName="caption"
          onOptionClick={(): boolean => true}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
