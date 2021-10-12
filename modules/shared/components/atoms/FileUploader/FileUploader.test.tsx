import type { ReactElement } from 'react';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormProvider, useForm } from 'react-hook-form';
import FileUploader from './FileUploader';
import { configPostCreation } from '../../../configuration/ConfigPostCreation/config';

const customRender = (ui: ReactElement): unknown => {
  const Wrapper: React.FC = ({ children }) => {
    const methods = useForm({
      mode: 'onSubmit',
      reValidateMode: 'onChange',
    });
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  return render(<Wrapper>{ui}</Wrapper>);
};

describe('FileUploader', () => {
  it('should upload the 2 files successfully', () => {
    const firstFile = 0;
    const secondFile = 1;
    const twoFiles = 2;

    const filesInput = [
      new File(['hello'], 'image-one.png', { type: 'image/png' }),
      new File(['there'], 'image-two.png', { type: 'image/png' }),
    ];

    const onFileSuccess = jest.fn();

    customRender(
      <FileUploader
        entityType="option"
        lastFilesLength={0}
        onFileSuccess={onFileSuccess}
        maxFiles={configPostCreation.maxUploadedFiles}
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

    const filesInput = [
      new File(['hello'], 'image-one.png', { type: 'image/png' }),
      new File(['there'], 'image-two.png', { type: 'image/png' }),
    ];

    const onFileSuccess = jest.fn();
    customRender(
      <FileUploader
        entityType="option"
        lastFilesLength={0}
        onFileSuccess={onFileSuccess}
        maxFiles={configPostCreation.maxUploadedFiles}
      />,
    );

    // envolved elements
    const fileInput = screen.getByTestId('file-input') as HTMLInputElement;

    userEvent.upload(fileInput, filesInput);

    // assertions
    expect(onFileSuccess).toHaveBeenCalledTimes(calledOnce);
  });

  it('should not call onFileError function when we upload 2 invalid files', () => {
    const calledZeroTimes = 0;

    const filesInput = [
      new File(['hello'], 'index-one.js', { type: 'js' }),
      new File(['there'], 'index-two.js', { type: 'js' }),
    ];

    const onFileSuccess = jest.fn();
    customRender(
      <FileUploader
        entityType="option"
        lastFilesLength={0}
        onFileSuccess={onFileSuccess}
        maxFiles={configPostCreation.maxUploadedFiles}
      />,
    );

    // envolved elements
    const fileInput = screen.getByTestId('file-input') as HTMLInputElement;

    userEvent.upload(fileInput, filesInput);

    // assertions
    expect(onFileSuccess).toHaveBeenCalledTimes(calledZeroTimes);
  });

  it('should  call onFileSuccess once when we upload 1 valid and 1 invalid files', () => {
    const calledOnce = 1;

    const filesInput = [
      new File(['there'], 'index-one.js', { type: 'js' }),
      new File(['hello'], 'image-one.png', { type: 'image/png' }),
    ];

    const onFileSuccess = jest.fn();

    customRender(
      <FileUploader
        entityType="option"
        lastFilesLength={0}
        onFileSuccess={onFileSuccess}
        maxFiles={configPostCreation.maxUploadedFiles}
      />,
    );

    // envolved elements
    const fileInput = screen.getByTestId('file-input') as HTMLInputElement;

    userEvent.upload(fileInput, filesInput);

    // assertions
    expect(onFileSuccess).toHaveBeenCalledTimes(calledOnce);
  });
});
