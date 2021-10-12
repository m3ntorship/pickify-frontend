import React from 'react';
import type { FC, ReactElement } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { useUploadedFiles } from './useUploadedFiles';
import { configPostCreation } from '../../configuration/ConfigPostCreation/config';

const TargetComponent: FC<{ file: File }> = ({ file }): ReactElement => {
  const { error, message } = useUploadedFiles(file);

  return (
    <>
      {error ? (
        <div data-testid="error-message">{message}</div>
      ) : (
        <div data-testid="success-message">valid file</div>
      )}
    </>
  );
};

describe('useUploadedFiles', () => {
  it('should return success response when it recieves valid file', async () => {
    const file = new File(['hello'], 'image.png', { type: 'image/png' });

    render(<TargetComponent file={file} />);

    const errorMesage = screen.queryByTestId('error-message');
    const successMesage = screen.queryByTestId('success-message');

    // assertions
    await waitFor(() => {
      expect(errorMesage).not.toBeInTheDocument();
      expect(successMesage).toBeInTheDocument();
      expect(successMesage).toHaveTextContent('valid file');
    });
  });

  it('should return error and error message when it recieves invalid file', async () => {
    const file = new File(['hello'], 'image.png', { type: 'image/png' });
    const fileSizeInBytes = 11_000_000;
    Object.defineProperty(file, 'size', { value: fileSizeInBytes });

    render(<TargetComponent file={file} />);

    const errorMesage = screen.findByTestId('error-message');

    // assertions
    await waitFor(async () => {
      expect(await errorMesage).toBeInTheDocument();
      expect(await errorMesage).toHaveTextContent(
        `Max size is ${configPostCreation.maxFileSizeInMegaByte} MB!!`,
      );
    });
  });
});
