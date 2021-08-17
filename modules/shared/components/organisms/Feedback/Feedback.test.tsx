import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Feedback from './Feedback';

describe('Feedback', () => {
  it('renders The Feedback initial state', () => {
    const tree = renderer.create(<Feedback />);
    expect(tree).toMatchSnapshot();
  });

  it('renders The Feedback with disabled button as default', () => {
    render(<Feedback />);

    const submitButton = screen.getByRole('button');

    expect(submitButton).toBeDisabled();
  });

  it('renders The Feedback with disabled button as default and when user chose any emoji it will be activated', () => {
    render(<Feedback />);
    const goodEmoji = screen.getByTestId('good');
    const submitButton = screen.getByRole('button');

    userEvent.click(goodEmoji);

    expect(submitButton).toBeEnabled();
  });

  it('renders The Feedback when user click happy or amazing emoji state', () => {
    render(<Feedback />);

    const goodEmoji = screen.getByTestId('good');
    const submitButton = screen.getByRole('button');

    userEvent.click(goodEmoji);
    userEvent.click(submitButton);

    const positiveFeedback = screen.getByTestId('positiveFeedback');

    expect(positiveFeedback).toBeInTheDocument();
  });
  it('renders The Feedback when user click bad or neutral or terrible emoji state', () => {
    render(<Feedback />);

    const badEmoji = screen.getByTestId('bad');
    const submitButton = screen.getByRole('button');

    userEvent.click(badEmoji);
    userEvent.click(submitButton);

    const negativeFeedback = screen.getByTestId('negativeFeedback');

    expect(negativeFeedback).toBeInTheDocument();
  });
});
