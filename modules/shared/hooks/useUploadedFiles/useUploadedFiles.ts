import type { MutableRefObject } from 'react';
import { useState, useEffect } from 'react';
import { useIsMounted } from '../useIsMounted/useIsMounted';
import type { IUseUploadedFiles } from './IUseUploadedFiles';

export const useUploadedFiles = (
  uploadedFile: File,
): IUseUploadedFiles.IUploadedFiles => {
  const [response, setResopnse] = useState<File | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const isMounted: MutableRefObject<boolean> = useIsMounted();

  useEffect(() => {
    const maxFileSizeInByte = 200_000;

    const promise: Promise<File> = new Promise((resolve, reject) => {
      if (uploadedFile.size < maxFileSizeInByte) {
        resolve(uploadedFile);
      } else {
        reject(new Error('Max size is 2 MB!!'));
      }
    });

    promise
      .then((data) => {
        if (isMounted.current) {
          setResopnse(data);
          setError(false);
        }
      })
      .catch((err: Error) => {
        if (isMounted.current) {
          setError(true);
          setMessage(err.message);
        }
      });
  }, []);

  return { response, error, message };
};
