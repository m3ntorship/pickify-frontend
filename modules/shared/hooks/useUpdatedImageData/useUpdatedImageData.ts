import { useEffect, useState } from 'react';
import type { IUseUpdatedImageData } from './IUseUpdatedImageData';

export const useUpdatedImageData = ({
  file,
}: IUseUpdatedImageData.UpdatedImageData): string => {
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener('load', (e: ProgressEvent<FileReader>) => {
      setUrl(e.target?.result as string);
    });
  }, [file]);
  return url;
};
