import * as React from 'react';
import { render, screen } from '@testing-library/react';
import * as renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import PostViewHeader from './Index';
import type { TargetElement } from '@testing-library/user-event';

describe('Testing postViewHeader with snapshot', () => {
  it('if variant equalls annonymous, name becomes Anonymous as well even if a name is set', () => {
    const tree = renderer
      .create(
        <PostViewHeader
          id="test"
          size="medium"
          variant="anonymous"
          date={new Date('2020-04-02T08:02:17-05:00')}
          name="Marzouk el akta3"
          handleEditIconClick={(): boolean => {
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
        size="medium"
        variant="anonymous"
        date={new Date('2020-04-02T08:02:17-05:00')}
        name="Marzouk el akta3"
        handleEditIconClick={handleClick}
      />,
    );
    const editIcon: TargetElement = screen.getByTestId('test');
    const timesOfClick = 1;
    userEvent.click(editIcon);
    expect(handleClick).toBeCalledTimes(timesOfClick);
  });
});
