import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import type { TargetElement } from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import UploadingImage from './UploadingImage';

describe('UploadingImage', () => {
  it('should render Misc component when we pass invalid file', async () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const fileSizeInBytes = 10_000_000;
    Object.defineProperty(file, 'size', { value: fileSizeInBytes });

    const imagesData = {
      postType: 'Image Poll',
      postCaption: { id: 'id_123181287', value: '' },
      validImages: [],
      hiddenIdentity: false,
      privacy: 'friends',
    };

    const setImagesData = jest.fn();

    render(
      <UploadingImage
        file={file}
        id="someId"
        imagesData={imagesData}
        setImagesData={setImagesData}
        letter="A"
      />,
    );

    const miscComponent = screen.findByTestId('misc-box');
    const subMsg = screen.findByTestId('sub-msg');

    await waitFor(async () => {
      expect(await miscComponent).toBeInTheDocument();
      expect(await subMsg).toHaveTextContent('Max size is 2 MB');
    });
  });

  it('should call setImagePollState function when we type something in the TextInput', () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const imagesData = {
      postType: 'Image Poll',
      postCaption: { id: 'id_123181287', value: '' },
      validImages: [],
      hiddenIdentity: false,
      privacy: 'friends',
    };

    const setImagesData = jest.fn();

    const calledThreeTimes = 3;

    render(
      <UploadingImage
        file={file}
        id="2"
        imagesData={imagesData}
        setImagesData={setImagesData}
        letter="A"
      />,
    );

    const textInput: TargetElement = screen.getByTestId('text-input');

    userEvent.type(textInput, 'hi');

    expect(textInput).toHaveValue('hi');
    expect(setImagesData).toHaveBeenCalledTimes(calledThreeTimes);
  });

  it('should call setImagePollState function when we reset the TextInput', () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const imagesData = {
      postType: 'Image Poll',
      postCaption: { id: 'id_123181287', value: '' },
      validImages: [],
      hiddenIdentity: false,
      privacy: 'friends',
    };

    const setImagesData = jest.fn();

    const calledFourTimes = 4;

    render(
      <UploadingImage
        file={file}
        id="2"
        imagesData={imagesData}
        setImagesData={setImagesData}
        letter="A"
      />,
    );

    const textInput: TargetElement = screen.getByTestId('text-input');

    userEvent.type(textInput, 'hi');

    const deleteIcon: TargetElement = screen.getByTestId('delete-icon');
    userEvent.click(deleteIcon);

    expect(textInput).toHaveValue('');
    expect(setImagesData).toHaveBeenCalledTimes(calledFourTimes);
  });
});
