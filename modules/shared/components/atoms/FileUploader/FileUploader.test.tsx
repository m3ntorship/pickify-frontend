import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ImageUpload from './FileUploader';

describe('ImageUpload', () => {
  it('should upload the 2 files successfully', () => {
    const firstFile = 0;
    const secondFile = 1;
    const twoFiles = 2;

    const filesInput = [
      new File(['hello'], 'image-one.png', { type: 'image/png' }),
      new File(['there'], 'image-two.png', { type: 'image/png' }),
    ];

    const onFileSuccess = jest.fn();
    const onFileError = jest.fn();
    const onMaxFilesError = jest.fn();

    render(
      <ImageUpload
        onFileSuccess={onFileSuccess}
        onMaxFilesError={onMaxFilesError}
        onFileError={onFileError}
        maxFiles={4}
      />,
    );

    // envolved elements
    const fileInput = screen.getByTestId('file-input') as HTMLInputElement;

    userEvent.upload(fileInput, filesInput);

    const { files } = fileInput;

    // assertions
    expect(fileInput.files).toHaveLength(twoFiles);
    if (files) {
      expect(files[firstFile]).toEqual(filesInput[firstFile]);
      expect(files[secondFile]).toEqual(filesInput[secondFile]);
    }
  });

  it('should call onFileSuccess function when we upload 2 valid files', () => {
    const calledOnce = 1;
    const calledZeroTimes = 0;

    const filesInput = [
      new File(['hello'], 'image-one.png', { type: 'image/png' }),
      new File(['there'], 'image-two.png', { type: 'image/png' }),
    ];

    const onFileSuccess = jest.fn();
    const onFileError = jest.fn();
    const onMaxFilesError = jest.fn();

    render(
      <ImageUpload
        onFileSuccess={onFileSuccess}
        onMaxFilesError={onMaxFilesError}
        onFileError={onFileError}
        maxFiles={4}
      />,
    );

    // envolved elements
    const fileInput = screen.getByTestId('file-input') as HTMLInputElement;

    userEvent.upload(fileInput, filesInput);

    // assertions
    expect(onFileSuccess).toHaveBeenCalledTimes(calledOnce);
    expect(onFileError).toHaveBeenCalledTimes(calledZeroTimes);
    expect(onMaxFilesError).toHaveBeenCalledTimes(calledZeroTimes);
  });

  it('should call onFileError function when we upload 2 invalid files', () => {
    const calledOnce = 1;
    const calledZeroTimes = 0;

    const filesInput = [
      new File(['hello'], 'index-one.js', { type: 'js' }),
      new File(['there'], 'index-two.js', { type: 'js' }),
    ];

    const onFileSuccess = jest.fn();
    const onFileError = jest.fn();
    const onMaxFilesError = jest.fn();

    render(
      <ImageUpload
        onFileSuccess={onFileSuccess}
        onMaxFilesError={onMaxFilesError}
        onFileError={onFileError}
        maxFiles={4}
      />,
    );

    // envolved elements
    const fileInput = screen.getByTestId('file-input') as HTMLInputElement;

    userEvent.upload(fileInput, filesInput);

    // assertions
    expect(onFileError).toHaveBeenCalledTimes(calledOnce);
    expect(onFileSuccess).toHaveBeenCalledTimes(calledZeroTimes);
    expect(onMaxFilesError).toHaveBeenCalledTimes(calledZeroTimes);
  });

  it('should call both onFileSuccess onFileError functions when we upload 1 valid and 1 invalid files', () => {
    const calledOnce = 1;
    const calledZeroTimes = 0;

    const filesInput = [
      new File(['hello'], 'image-one.png', { type: 'image/png' }),
      new File(['there'], 'index-one.js', { type: 'js' }),
    ];

    const onFileSuccess = jest.fn();
    const onFileError = jest.fn();
    const onMaxFilesError = jest.fn();

    render(
      <ImageUpload
        onFileSuccess={onFileSuccess}
        onMaxFilesError={onMaxFilesError}
        onFileError={onFileError}
        maxFiles={4}
      />,
    );

    // envolved elements
    const fileInput = screen.getByTestId('file-input') as HTMLInputElement;

    userEvent.upload(fileInput, filesInput);

    // assertions
    expect(onFileError).toHaveBeenCalledTimes(calledOnce);
    expect(onFileSuccess).toHaveBeenCalledTimes(calledOnce);
    expect(onMaxFilesError).toHaveBeenCalledTimes(calledZeroTimes);
  });

  it('should call onMaxFilesError function when we upload more than the required file length', () => {
    const calledOnce = 1;
    const calledZeroTimes = 0;

    const filesInput = [
      new File(['hello'], 'image-one.png', { type: 'image/png' }),
      new File(['there'], 'image-two.png', { type: 'image/png' }),
      new File(['again'], 'image-three.png', { type: 'image/png' }),
    ];

    const onFileSuccess = jest.fn();
    const onFileError = jest.fn();
    const onMaxFilesError = jest.fn();

    render(
      <ImageUpload
        onFileSuccess={onFileSuccess}
        onMaxFilesError={onMaxFilesError}
        onFileError={onFileError}
        maxFiles={2}
      />,
    );

    // envolved elements
    const fileInput = screen.getByTestId('file-input') as HTMLInputElement;

    userEvent.upload(fileInput, filesInput);

    // assertions
    expect(onMaxFilesError).toHaveBeenCalledTimes(calledOnce);
    expect(onFileError).toHaveBeenCalledTimes(calledZeroTimes);
    expect(onFileSuccess).toHaveBeenCalledTimes(calledZeroTimes);
  });
});
