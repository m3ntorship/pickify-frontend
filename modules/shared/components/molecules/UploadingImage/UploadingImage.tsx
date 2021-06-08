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
  handleVerticalThreeDotsClick,
  textInputLetter,
  textInputId,
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
        <button
          type="button"
          onClick={handleVerticalThreeDotsClick}
          className={styles.button}
        >
          <VerticalThreeDots className="fill-dark-grey" />
        </button>
      </div>
      <TextInput
        variants={ETextInput.Variants.Default}
        inputType={ETextInput.InputType.Choices}
        letter={textInputLetter}
        id={textInputId}
        placeholder="Type caption (optional)"
        style={{ borderTopLeftRadius: '0', borderTopRightRadius: '0' }}
      />
    </div>
  );
};

export default UploadingImage;
