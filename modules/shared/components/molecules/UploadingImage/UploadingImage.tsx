import React from 'react';
import type { FC, ReactElement } from 'react';
import Image from 'next/image';
import type { IUploadingImage } from './IUploadingImage';
import styles from './UploadingImage.module.css';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
import VerticalThreeDots from '../../icons/verticalThreeDots.svg';

const UploadingImage: FC<IUploadingImage.IProps> = ({
  imageUrl = 'https://source.unsplash.com/random',
}): ReactElement => {
  return (
    <div className={styles.container}>
      <div className="relative">
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="contain"
          className="w-full h-full rounded-t-md mb-1 "
        />
        <div className="absolute top-4 right-4">
          <VerticalThreeDots />
        </div>
      </div>
      <TextInput
        variants={ETextInput.Variants.Default}
        inputType={ETextInput.InputType.Choices}
        letter="A"
        id="1"
      />
    </div>
  );
};

export default UploadingImage;
