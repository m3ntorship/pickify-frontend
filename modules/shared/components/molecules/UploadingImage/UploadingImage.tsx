import React from 'react';
import type { FC, ReactElement } from 'react';
import classNames from 'classnames';
import { useFormContext } from 'react-hook-form';
import { useUpdatedImageData } from '../../../hooks/useUpdatedImageData/useUpdatedImageData';
import { useUploadedFiles } from '../../../hooks/useUploadedFiles/useUploadedFiles';
import type { IUploadingImage } from './IUploadingImage';
import styles from './UploadingImage.module.css';
import MessageBox from '../MessageBox/MessageBox';
import { MessageBoxType } from '../MessageBox/types/EMessageBox';
import DropDown from '../../atoms/DropDown/DropDown';
import { creationDropDown } from '../../atoms/DropDown/mockedOptions';
import VerticalThreeDotsIcon from '../../icons/verticalThreeDots.svg';

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

  const onMenuOptionClickHandler = (optionId: string): void => {
    switch (optionId) {
      case 'delete':
        handleVerticalThreeDotsClick(id);
        break;
      case 'order':
        console.log('order');
        break;
      default:
        console.log('default');
    }
  };
  return (
    <div className={styles.container} data-testid="uploaded-box">
      <div className={styles['image-container']}>
        <img
          src={url}
          width={600}
          height={600}
          className="absolute object-cover w-full h-full filter blur-sm"
          id={id}
          alt="uploaded option"
        />
        <img
          src={url}
          width={600}
          height={600}
          className={imgClasses}
          id={id}
          alt="uploaded option"
        />
        {error ? (
          <div className={styles.layout}>
            <div className={styles['error-box']}>
              <MessageBox
                msg="Image couldn’t be uploaded!"
                subMsg={message}
                type={MessageBoxType.Error}
              />
            </div>
          </div>
        ) : (
          ''
        )}
        <div className={styles.button}>
          <DropDown
            variant="image"
            options={creationDropDown}
            onOptionMenuClick={onMenuOptionClickHandler}
            size="md"
          >
            <VerticalThreeDotsIcon className="fill-grey w-6 h-6" />
          </DropDown>
        </div>
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
