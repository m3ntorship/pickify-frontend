import * as React from 'react';
import { render, screen } from '@testing-library/react';
import * as renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import type { TargetElement } from '@testing-library/user-event';
import PostViewHeader from './PostViewHeader';

describe('Testing postViewHeader with snapshot', () => {
  it('if isHidden is true, name becomes Anonymous as well even if a name is given', () => {
    const tree = renderer
      .create(
        <PostViewHeader
          date={new Date('1967-11-01T19:15:45.339Z')}
          id="test"
          isHidden
          name="Marzouk el akta3"
          handlePostOptionsIconClick={(): boolean => {
            return true;
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Testing postViewHeader react testing library', () => {
  it('should be clicked once', () => {
    const handleClick = jest.fn();
    render(
      <PostViewHeader
        id="test"
        isHidden
        date={new Date('1967-11-01T19:15:45.339Z')}
        name="Marzouk el akta3"
        handlePostOptionsIconClick={handleClick}
      />,
    );
    const postOptionsIcon: TargetElement = screen.getByTestId('test');
    const timesOfClick = 1;
    userEvent.click(postOptionsIcon);
    expect(handleClick).toBeCalledTimes(timesOfClick);
  });
});
