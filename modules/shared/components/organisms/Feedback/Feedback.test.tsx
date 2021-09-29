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

  it('clicking on the happyIcon in the navigation should open the feedback popup', () => {
    render(<Feedback />);
    const openFeedback = screen.getByTestId('open-feedback');
    userEvent.click(openFeedback);
    const feedBackPopup = screen.getByTestId('feedback-popup');

    expect(feedBackPopup).toBeInTheDocument();
  });

  it('renders The Feedback with disabled button as default', () => {
    render(<Feedback />);
    const openFeedback = screen.getByTestId('open-feedback');
    userEvent.click(openFeedback);
    const submitButton = screen.getByRole('button');

    expect(submitButton).toBeDisabled();
  });

  it('renders The Feedback with disabled button as default and when user choose any emoji it will be activated', () => {
    render(<Feedback />);
    const openFeedback = screen.getByTestId('open-feedback');
    userEvent.click(openFeedback);
    const goodEmoji = screen.getByTestId('4');
    const submitButton = screen.getByRole('button');
    userEvent.click(goodEmoji);

    expect(submitButton).toBeEnabled();
  });

  // it('renders The positive Feedback when user click Amazing emoji with 5 rate', async () => {
  //   render(<Feedback />);
  //   const openFeedback = screen.getByTestId('open-feedback');
  //   userEvent.click(openFeedback);
  //   const amazingEmoji = screen.getByTestId('5');
  //   const submitButton = screen.getByRole('button');
  //   userEvent.click(amazingEmoji);
  //   userEvent.click(submitButton);

  //   const positiveFeedback = await screen.findByTestId('positiveFeedback');

  //   expect(positiveFeedback).toBeInTheDocument();
  // });

  // it('renders The positive Feedback when user click Happy emoji with 4 rate', () => {
  //   render(<Feedback />);
  //   const openFeedback = screen.getByTestId('open-feedback');
  //   userEvent.click(openFeedback);
  //   const happyEmoji = screen.getByTestId('4');

  //   const submitButton = screen.getByRole('button');
  //   userEvent.click(happyEmoji);
  //   userEvent.click(submitButton);

  //   const positiveFeedback = screen.getByTestId('positiveFeedback');

  //   expect(positiveFeedback).toBeInTheDocument();
  // });

  // it('renders The negative Feedback when user click neutral emoji state with 3 rate', () => {
  //   render(<Feedback />);
  //   const openFeedback = screen.getByTestId('open-feedback');
  //   userEvent.click(openFeedback);
  //   const neutralEmoji = screen.getByTestId('3');
  //   const submitButton = screen.getByRole('button');
  //   userEvent.click(neutralEmoji);
  //   userEvent.click(submitButton);

  //   const negativeFeedback = screen.getByTestId('negativeFeedback');

  //   expect(negativeFeedback).toBeInTheDocument();
  // });

  // it('renders The negative Feedback when user click sad emoji state with 2 rate', () => {
  //   render(<Feedback />);
  //   const openFeedback = screen.getByTestId('open-feedback');
  //   userEvent.click(openFeedback);
  //   const sadEmoji = screen.getByTestId('2');
  //   const submitButton = screen.getByRole('button');
  //   userEvent.click(sadEmoji);
  //   userEvent.click(submitButton);

  //   const negativeFeedback = screen.getByTestId('negativeFeedback');

  //   expect(negativeFeedback).toBeInTheDocument();
  // });

  // it('renders The negative Feedback when user click very sad emoji state with 1 rate', () => {
  //   render(<Feedback />);
  //   const openFeedback = screen.getByTestId('open-feedback');
  //   userEvent.click(openFeedback);
  //   const verySadEmoji = screen.getByTestId('1');
  //   const submitButton = screen.getByRole('button');
  //   userEvent.click(verySadEmoji);
  //   userEvent.click(submitButton);

  //   const negativeFeedback = screen.getByTestId('negativeFeedback');

  //   expect(negativeFeedback).toBeInTheDocument();
  // });
});
