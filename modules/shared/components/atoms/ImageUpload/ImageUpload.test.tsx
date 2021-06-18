import React from 'react';
import { render, screen } from '@testing-library/react';
import type { TargetElement } from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import ImageUpload from '.';

describe('ImageUpload', () => {
  it('should upload the choosen files successfully', () => {
    const firstFile = 0;
    const secondFile = 1;
    const twoFiles = 2;

    const filesInput = [
      new File(['hello'], 'image-one.png', { type: 'image/png' }),
      new File(['there'], 'image-two.png', { type: 'image/png' }),
    ];
    const oldFiles = [
      {
        imgId: 'id_151515115',
        file: filesInput[firstFile],
        error: false,
        imgCaption: '',
        message: '',
      },
    ];
    const updateFilesState = jest.fn();

    render(
      <ImageUpload files={oldFiles} setFiles={updateFilesState} maxFiles={4} />,
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

  it('should render upload button with accent colors when we upload valid files', () => {
    const firstFile = 0;
    const filesInput = [
      new File(['hello'], 'image-one.png', { type: 'image/png' }),
      new File(['there'], 'image-two.png', { type: 'image/png' }),
    ];
    const files = [
      {
        imgId: 'id_151515115',
        file: filesInput[firstFile],
        error: false,
        imgCaption: '',
        message: '',
      },
    ];
    const updateFilesState = jest.fn();

    render(
      <ImageUpload files={files} setFiles={updateFilesState} maxFiles={4} />,
    );

    // envolved elements
    const fileInput = screen.getByTestId('file-input') as HTMLInputElement;
    const fileBox: TargetElement = screen.getByTestId('file-box');

    userEvent.upload(fileInput, filesInput);

    // assertions
    expect(fileBox).toHaveClass('border-accent bg-grey-shd7');
  });

  it('should render upload button with error colors when we upload invalid files', () => {
    const firstFile = 0;
    const filesInput = [
      new File(['hello'], 'index-one.js', { type: 'js' }),
      new File(['there'], 'index-two.js', { type: 'js' }),
    ];
    const files = [
      {
        imgId: 'id_151515115',
        file: filesInput[firstFile],
        error: false,
        imgCaption: '',
        message: '',
      },
    ];
    const updateFilesState = jest.fn();

    render(
      <ImageUpload files={files} setFiles={updateFilesState} maxFiles={4} />,
    );

    // envolved elements
    const fileInput = screen.getByTestId('file-input') as HTMLInputElement;
    const fileBox: TargetElement = screen.getByTestId('file-box');

    userEvent.upload(fileInput, filesInput);

    // assertions
    expect(fileBox).toHaveClass('border-error bg-error-shd7');
  });
});
