import React, { useState } from 'react';
import type { ReactElement, FC } from 'react';
import conditionalProperties from 'classnames';
import ImageUpload from '../../atoms/ImageUpload/index';
import styles from './CreateImagePoll.module.css';
import UploadingImage from '../../molecules/UploadingImage/UploadingImage';
import {
  alphabet,
  randId,
} from '../../../logic/createImagePoll/createImagePoll';

const CreateImagePoll: FC = (): ReactElement => {
  const [files, setFiles] = useState<File[]>([]);

  const onChangeHanlder = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const filesArr: File[] = [];
    const numbZero = 0;
    const numbFive = 5;
    Array.prototype.map.call(e.target.files, function (file: File) {
      if (file.type.substr(numbZero, numbFive) === 'image') {
        filesArr.push(file);
      }
    });
    setFiles([...files, ...filesArr]);
  };

  const imgClasses = conditionalProperties(
    `grid ${styles.gridImgUpload} gap-x-2 gap-y-4 rounded-md relative mb-m`,
  );
  const maxLength = 3;
  return (
    <>
      <div className={imgClasses}>
        {files.map((file, index) => {
          return (
            <UploadingImage
              file={file}
              key={randId()}
              textInputLetter={alphabet[index]}
              id={`${index}`}
              filesNumber={files.length}
            />
          );
        })}
      </div>
      {files.length <= maxLength ? (
        <ImageUpload onChangeInputHandler={onChangeHanlder} />
      ) : (
        ''
      )}
    </>
  );
};

export default CreateImagePoll;
