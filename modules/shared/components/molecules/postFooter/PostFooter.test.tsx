import { render, screen } from '@testing-library/react';
import type { TargetElement } from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PostFooter from './PostFooter';

describe('Testing Footer with snapshot', () => {
  it('Testing Footer with required props', () => {
    const tree = renderer
      .create(
        <PostFooter
          numberOfVotes={120}
          showResult
          sharePostHandler={(): boolean => true}
          postId=""
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Testing Footer with required props', () => {
    const tree = renderer
      .create(
        <PostFooter
          numberOfVotes={120}
          showResult
          sharePostHandler={(): boolean => true}
          postId=""
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call sharePostHandler when clicking on the share icon button', () => {
    const mockedFn = jest.fn();
    render(
      <PostFooter
        numberOfVotes={120}
        showResult
        sharePostHandler={mockedFn}
        postId=""
      />,
    );
    const shareButton: TargetElement = screen.getByTestId('share-button-icon');
    userEvent.click(shareButton);
    expect(mockedFn).toHaveBeenCalledTimes(1);
  });
});
