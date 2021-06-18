import React, { useEffect, useState } from 'react';
import type { FC, ReactElement } from 'react';
import Image from 'next/image';
import type { IUploadedFiles } from '@modules/shared/logic/uploadedFiles/IUploadedFiles';
import FileUploader from '../../atoms/FileUploader/FileUploader';
import ThreeDotsIcon from '../../icons/verticalThreeDots.svg';
import type { IMiniSurveyCreationBody } from './IMiniSurveyCreationBody';

const MiniSurveyCreationBody: FC<IMiniSurveyCreationBody.IProps> = ({
  handleImageEdit,
}): ReactElement => {
  const [imageFiles, setImageFiles] = useState<IUploadedFiles.IImagesData[]>([
    {
      error: true,
      file: new File(['hello'], 'hello.png', { type: 'image/png' }),
      message: '',
      imgCaption: '',
      imgId: 'id_1212312',
    },
  ]);
  const [imageFileUrl, setImageFileURl] = useState<string>('');

  useEffect(() => {
    const zero = 0;
    if (!imageFiles[zero].error) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(imageFiles[zero].file as Blob);
      fileReader.onload = (): void => {
        setImageFileURl(fileReader.result as string);
      };
    }
  }, [imageFiles]);

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
        <FileUploader
          files={imageFiles}
          setFiles={setImageFiles}
          maxFiles={1}
        />
      )}
    </div>
  );
};

export default MiniSurveyCreationBody;
