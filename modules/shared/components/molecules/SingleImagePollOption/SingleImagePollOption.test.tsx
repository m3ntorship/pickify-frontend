import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SingleImagePollOption from './SingleImagePollOption';
import { covoredOptions, unCovoredOptions } from './mockedOptions';

describe('SingleImagePollOption', () => {
  it('should render covored like and dislike icons when passing covored options', () => {
    const tree = renderer
      .create(
        <SingleImagePollOption
          options={covoredOptions}
          media={[{ url: 'https://placeimg.com/640/480/any' }]}
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
        <SingleImagePollOption
          options={unCovoredOptions}
          media={[{ url: 'https://placeimg.com/640/480/any' }]}
          groupName="caption"
          onOptionClick={(): boolean => true}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
