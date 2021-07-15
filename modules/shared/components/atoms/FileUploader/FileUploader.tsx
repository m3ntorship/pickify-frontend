import React, { useEffect, useState } from 'react';
import type { ReactElement, FC, ChangeEvent } from 'react';
import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';
import styles from './FileUploader.module.css';
import Image from '../../icons/image.svg';
import type { IFileUploader } from './IFileUploader';
import { validateUploadedImages } from '../../../logic/uploadedFiles/uploadedFiles';

const FileUploader: FC<IFileUploader.IProps> = ({
  onFileSuccess,
  maxFiles,
  entityType,
  lastFilesLength,
}): ReactElement => {
  const zero = 0;
  const [filesErrors, setFilesErrors] = useState<
    { error: boolean; message: string }[]
  >([]);

  const {
    formState: { errors },
    register,
    setValue,
  } = useFormContext();

  useEffect(() => {
    if (errors[`uploadedFilesIn${entityType}`])
      setFilesErrors([
        { error: true, message: 'you need to upload at least one file' },
      ]);
  }, [errors[`uploadedFilesIn${entityType}`]]);

  const ImageUploaderRegister = {
    ...register(`uploadedFilesIn${entityType}`, {
      required: true,
      shouldUnregister: false,
    }),
  };

  const onUploadFilesHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const validatedImages = validateUploadedImages(e.target.files);

    if (
      validatedImages.length > maxFiles ||
      validatedImages.length + lastFilesLength > maxFiles
    ) {
      setFilesErrors([
        ...filesErrors,
        {
          error: true,
          message: `Can not upload more than ${maxFiles} files`,
        },
      ]);
      if (lastFilesLength === zero)
        setValue(`uploadedFilesIn${entityType}`, '');
    } else {
      const validFiles = validatedImages.filter((image) => !image.error);
      const invalidFiles = validatedImages.filter((image) => image.error);
      if (validFiles.length > zero) {
        onFileSuccess(validFiles);
        setFilesErrors([]);
      }
      if (invalidFiles.length > zero) {
        setValue(`uploadedFilesIn${entityType}`, '');
        setFilesErrors([...filesErrors, ...invalidFiles]);
      }
    }
  };

  const inputFileClasses = classNames(styles['container-for-image-upload'], {
    'border-accent bg-grey-shd7': filesErrors.length === zero,
    'border-error bg-error-shd7': filesErrors.length > zero,
  });

  const textClasses = classNames(styles['text-for-image-upload'], {
    'text-accent': filesErrors.length === zero,
    'text-error': filesErrors.length > zero,
  });

  const svgClasses = classNames(styles['svg-media-icon'], {
    'fill-accent': filesErrors.length === zero,
    'fill-error': filesErrors.length > zero,
  });

  const imageInputtitle = (): string => {
    if (filesErrors.length > zero) {
      const uniqErrors = [
        ...new Set(
          filesErrors.map((error) => {
            return error.message;
          }),
        ),
      ];
      return uniqErrors
        .map((errorMessages) => {
          return errorMessages;
        })
        .join(', and ');
    }
    return entityType === 'post'
      ? 'Attach an image'
      : 'Upload one or multiple images';
  };

  return (
    <div className="relative">
      <input
        type="file"
        id="image"
        accept="images/*"
        multiple
        className={styles['inputfile-for-type-image']}
        {...ImageUploaderRegister}
        onChange={(e): void => {
          onUploadFilesHandler(e);
          ImageUploaderRegister.onChange(e) as Promise<boolean>;
        }}
        data-testid="file-input"
        title={imageInputtitle()}
      />
      <label
        className={inputFileClasses}
        data-testid="file-box"
        htmlFor="image"
      >
        <span>
          <Image className={svgClasses} />
        </span>
        <p className={textClasses}>
          {entityType === 'post'
            ? 'Attach an image'
            : 'Upload one or multiple images'}
        </p>
      </label>
    </div>
  );
};

export default FileUploader;
