import React from 'react';
import type { FC, ReactElement } from 'react';
import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';
import { useUpdatedImageData } from '../../../hooks/useUpdatedImageData/useUpdatedImageData';
import { useUploadedFiles } from '../../../hooks/useUploadedFiles/useUploadedFiles';
import type { IUploadingImage } from './IUploadingImage';
import styles from './UploadingImage.module.css';
import VerticalThreeDots from '../../icons/verticalThreeDots.svg';
import Misc from '../Misc/Misc';
import { MiscType } from '../Misc/types/EMisc';

const UploadingImage: FC<IUploadingImage.IProps> = ({
  file,
  id,
  entityType = 'option',
  children,
  handleVerticalThreeDotsClick,
}): ReactElement => {
  const { register } = useFormContext();

  const { error, message } = useUploadedFiles(file);
  const url = useUpdatedImageData({ file, id, entityType });

  const imgClasses = classNames(styles.image, {
    'filter blur-sm ': error,
  });

  return (
    <div className={styles.container} data-testid="uploaded-box">
      <div className={styles['image-container']}>
        <img
          src={url}
          width={300}
          height={300}
          className={imgClasses}
          id={id}
          alt="uploaded option"
        />
        {error ? (
          <div className={styles.layout}>
            <div className={styles['error-box']}>
              <Misc
                msg="Image couldn’t be uploaded!"
                subMsg={message}
                type={MiscType.Error}
              />
            </div>
          </div>
        ) : (
          ''
        )}
        <button
          type="button"
          data-testid="VerticalThreeDots"
          onClick={(): void => {
            handleVerticalThreeDotsClick(id);
          }}
          className={styles.button}
        >
          <VerticalThreeDots className="fill-dark-grey" />
        </button>
      </div>
      {error ? (
        <div className={styles['image-caption']}>
          {children &&
            React.cloneElement(children, {
              disabled: true,
              ...register(`options.${id}`, { required: true }),
            })}
        </div>
      ) : null}
      {!error ? (
        <div className={styles['image-caption']}>{children}</div>
      ) : null}
    </div>
  );
};

export default UploadingImage;
