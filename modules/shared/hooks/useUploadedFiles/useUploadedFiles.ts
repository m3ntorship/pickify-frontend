import type { MutableRefObject } from 'react';
import { useState, useEffect } from 'react';
import { useIsMounted } from '../useIsMounted/useIsMounted';
import type { IUseUploadedFiles } from './IUseUploadedFiles';
import { configPostCreation } from '../../configuration/ConfigPostCreation/config';

export const useUploadedFiles = (
  uploadedFile: File,
): IUseUploadedFiles.IUploadedFiles => {
  const [response, setResponse] = useState<File | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const isMounted: MutableRefObject<boolean> = useIsMounted();

  useEffect(() => {
    const { maxFileSizeInByte } = configPostCreation;

    const promise: Promise<File> = new Promise((resolve, reject) => {
      if (uploadedFile.size < maxFileSizeInByte) {
        resolve(uploadedFile);
      } else {
        reject(
          new Error(
            `Max size is ${configPostCreation.maxFileSizeInMegaByte} MB!!`,
          ),
        );
      }
    });

    promise
      .then((data) => {
        if (isMounted.current) {
          setResponse(data);
          setError(false);
        }
      })
      .catch((err: Error) => {
        if (isMounted.current) {
          setError(true);
          setMessage(err.message);
        }
      });
  }, [isMounted, uploadedFile]);

  return { response, error, message };
};
