import React, { useState, useEffect, useRef } from 'react';
import type { FC, ReactElement } from 'react';
import type { IUploadingImage } from './IUploadingImage';
import styles from './UploadingImage.module.css';
import TextInput from '../../atoms/TextInputs/TextInput';
import * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
import VerticalThreeDots from '../../icons/verticalThreeDots.svg';
import Misc from '../Misc/Misc';
import { MiscType } from '../Misc/types/EMisc';

const useIsMounted = (): React.MutableRefObject<boolean> => {
  const isMounted: React.MutableRefObject<boolean> = useRef<boolean>(true);

  useEffect(() => {
    return (): void => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

const UploadingImage: FC<IUploadingImage.IProps> = ({
  file,
  letter,
  id,
  handleVerticalThreeDotsClick,
  handleTextInputOnBlur,
  error,
  message,
}): ReactElement => {
  const [url, setUrl] = useState<string>('');
  const [caption, setCaption] = useState<string>('');
  const isMounted: React.MutableRefObject<boolean> = useIsMounted();

  const updateImgCaptionHandler = (
    e: React.FormEvent<HTMLInputElement>,
  ): void => {
    setCaption(e.currentTarget.value);
  };

  const resetCaptionValueHandler = (): void => {
    setCaption('');
  };

  useEffect(() => {
    if (!error) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.addEventListener('load', (e) => {
        if (isMounted.current) {
          setUrl(e.target?.result as string);
        }
      });
    }
  }, [file, error, isMounted]);

  if (error) {
    return (
      <Misc
        msg="Image couldn’t be uploaded!"
        subMsg={message}
        type={MiscType.Error}
      />
    );
  }

  return (
    <div className={styles.container}>
      <div className="relative w-full h-full mb-1">
        <img
          src={`${url}`}
          width={300}
          height={300}
          className="object-cover rounded-t-md w-full h-full"
          id={id}
          alt={`${url}`}
        />
        <button
          type="button"
          data-testid="VerticalThreeDots"
          onClick={handleVerticalThreeDotsClick}
          className={styles.button}
        >
          <VerticalThreeDots className="fill-dark-grey" />
        </button>
      </div>
      <TextInput
        variants={ETextInput.Variants.Default}
        inputType={ETextInput.InputType.Choices}
        letter={letter}
        id={id}
        onChange={updateImgCaptionHandler}
        onBlur={handleTextInputOnBlur}
        value={caption}
        placeholder="Type caption (optional)"
        onClick={resetCaptionValueHandler}
      />
    </div>
  );
};

export default UploadingImage;
