import { useEffect, useState } from 'react';
import { useIsMounted } from '../useIsMounted/useIsMounted';
import type { IUseUpdatedImageData } from './IUseUpdatedImageData';

export const useUpdatedImageData = (
  props: IUseUpdatedImageData.UpdatedImageData,
): string => {
  const { file, imagesData, setImagesData, id, caption } = props;
  const [url, setUrl] = useState<string>('');
  const isMounted: React.MutableRefObject<boolean> = useIsMounted();

  useEffect(() => {
    const { type } = file as File;
    if (type) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file as File);
      fileReader.addEventListener('load', (e) => {
        if (isMounted.current) {
          setUrl(e.target?.result as string);
        }
      });
    }
  }, [file, isMounted]);

  useEffect(() => {
    if (url) {
      const uploadedImages = imagesData.validImages.map((image) => {
        if (image.imgId === id) {
          return { ...image, file: url };
        }
        return image;
      });
      setImagesData({
        ...imagesData,
        validImages: uploadedImages,
      });
    }
  }, [url]);

  useEffect(() => {
    const resetImagesCaption = imagesData.validImages.map((image) => {
      if (image.imgId === id) {
        return { ...image, imgCaption: caption };
      }
      return image;
    });
    setImagesData({
      ...imagesData,
      validImages: resetImagesCaption,
    });
  }, [caption]);

  return url;
};
