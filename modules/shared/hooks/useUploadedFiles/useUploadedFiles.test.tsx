import React from 'react';
import type { FC, ReactElement } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { useUploadedFiles } from './useUploadedFiles';

const TargetComponent: FC<{ file: File }> = ({ file }): ReactElement => {
  const { error, message } = useUploadedFiles(file);

  return <>{error && <div data-testid="message">{message}</div>}</>;
};

describe('useUploadedFiles', () => {
  it('should return success response when it recieves valid file', async () => {
    const file = new File(['hello'], 'image.png', { type: 'image/png' });

    render(<TargetComponent file={file} />);

    const mesage = screen.queryByTestId('message');

    // assertions
    await waitFor(() => {
      expect(mesage).not.toBeInTheDocument();
    });
  });

  it('should return error and error message when it recieves invalid file', async () => {
    const file = new File(['hello'], 'image.png', { type: 'image/png' });
    Object.defineProperty(file, 'size', { value: 2_000_000 });

    render(<TargetComponent file={file} />);

    const mesage = screen.findByTestId('message');

    // assertions
    await waitFor(async () => {
      expect(await mesage).toBeInTheDocument();
      expect(await mesage).toHaveTextContent('Max size is 2 MB!!');
    });
  });
});
