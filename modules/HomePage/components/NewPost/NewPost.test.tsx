import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewPost from './NewPost';

describe('NewPost', () => {
  it('should display the modal component when clicking on the post creation input', () => {
    render(<NewPost />);

    const postCreationInput = screen.getByTestId('post-creation-input');

    userEvent.click(postCreationInput);

    const modal = screen.getByTestId('layer');

    expect(modal).toBeInTheDocument();
  });

  it('should remove the modal from the document when clicking on the layer in modal component', () => {
    render(<NewPost />);

    const postCreationInput = screen.getByTestId('post-creation-input');

    userEvent.click(postCreationInput);

    const modal = screen.getByTestId('layer');

    userEvent.click(modal);

    expect(modal).not.toBeInTheDocument();
  });

  //   it('should remove the modal from the document when clicking on the cancel button', () => {
  //     render(<NewPost />);

  //     const postCreationInput = screen.getByTestId('post-creation-input');

  //     userEvent.click(postCreationInput);

  //     const cancelButton = screen.getByTestId('button');

  //     userEvent.click(cancelButton);

  //     expect(cancelButton).not.toBeInTheDocument();
  //   });
});
