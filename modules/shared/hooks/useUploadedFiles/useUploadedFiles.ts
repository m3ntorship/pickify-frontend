import { useState, useEffect } from 'react';
import type { IUseUploadedFiles } from './IUseUploadedFiles';

export const useUploadedFiles = (
  uploadedFile: Blob,
): IUseUploadedFiles.IUploadedFiles => {
  const [response, setResopnse] = useState<Blob | null>(null);
  const [error, serError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const maxFileSizeInByte = 200_000;

    const promise: Promise<Blob> = new Promise((resolve, reject) => {
      if (uploadedFile.size < maxFileSizeInByte) {
        resolve(uploadedFile);
      } else {
        reject(new Error('Max size is 2 MB!!'));
      }
    });

    promise
      .then((data) => {
        setResopnse(data);
        serError(false);
      })
      .catch((err: Error) => {
        serError(true);
        setMessage(err.message);
      });
  }, []);

  return { response, error, message };
};
