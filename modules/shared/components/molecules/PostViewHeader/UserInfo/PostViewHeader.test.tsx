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
          date="2 hours"
          name="Marzouk el akta3"
          onClick={(): boolean => {
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
        date="2 hours"
        name="Marzouk el akta3"
        onClick={handleClick}
      />,
    );
    const editIcon: TargetElement = screen.getByTestId('test');
    userEvent.click(editIcon);
    expect(handleClick).toBeCalled();
  });
});
