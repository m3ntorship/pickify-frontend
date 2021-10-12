import React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

describe('Modal', () => {
  it('should render modal component with children elements', () => {
    const mockedFn = jest.fn();
    const tree = renderer
      .create(
        <Modal closeModalHandler={mockedFn}>
          <div>Modal</div>
        </Modal>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call closeModalHandler function', () => {
    const mockedFn = jest.fn();
    const calledOnce = 1;
    render(
      <Modal closeModalHandler={mockedFn}>
        <div>Modal</div>
      </Modal>,
    );

    const layer = screen.getByTestId('layer');

    userEvent.click(layer);

    expect(mockedFn).toHaveBeenCalledTimes(calledOnce);
  });
});
