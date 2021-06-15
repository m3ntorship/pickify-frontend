import React, { useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';
import Image from 'next/image';
import ImageUpload from '../../atoms/ImageUpload';
import ThreeDotsIcon from '../../icons/verticalThreeDots.svg';
import type { IMiniSurveyCreationBody } from './IMiniSurveyCreationBody';

const MiniSurveyCreationBody: FC<IMiniSurveyCreationBody.IProps> = ({
  handleImageEdit,
}): ReactElement => {
  const [imageFile, setImageFile] = useState<File[]>([]);
  const [imageFileUrl, setImageFileURl] = useState<string>('');
  const imageUplaodChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const limitOfUplaodingFilesNumber = 1;
    if (
      e.target.files?.length !== undefined &&
      e.target.files.length === limitOfUplaodingFilesNumber
    ) {
      setImageFile([...e.target.files]);
    } else {
      alert('You can upload up to 1 image');
    }
  };
  useEffect(() => {
    const zero = 0;
    if (imageFile[zero]) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(imageFile[zero]);
      fileReader.addEventListener('load', (e: ProgressEvent<FileReader>) => {
        if (typeof e.target?.result === 'string') {
          setImageFileURl(e.target.result);
        }
      });
    }
  }, [imageFile]);

  return (
    <div className="px-4">
      {imageFileUrl ? (
        <div className="relative h-22xl">
          <button
            type="button"
            className="absolute z-50 rounded-full focus:outline-none right-4 top-4 bg-white h-8 w-8 flex justify-center items-center cursor-pointer"
            onClick={handleImageEdit}
          >
            <ThreeDotsIcon className="fill-dark-grey w-4 h-4" />
          </button>
          <Image
            alt="Mountains"
            src={imageFileUrl}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      ) : (
        <ImageUpload onChangeInputHandler={imageUplaodChangeHandler} />
      )}
    </div>
  );
};

export default MiniSurveyCreationBody;
