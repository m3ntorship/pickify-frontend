import React from 'react';
import type { ReactElement } from 'react';
import classNames from 'classnames';
import styles from './ImgWithInfo.module.css';
import type { IImgWithInfo } from './IImgWithInfo';
import Avatar from '../../atoms/Avatar/Avatar';
import { handleImgWithInfoVariant } from '../../../logic/imgWithInfoVariant/imgWithInfoVariant';

const ImgWithInfo = ({
  classes,
  children,
}: IImgWithInfo.IProps): ReactElement => {
  const boxClasses = classNames(styles.box, classes);
  return <div className={boxClasses}>{children}</div>;
};

const Image = ({
  classes,
  avatarSize = 'medium',
  ImageVariant,
  profilePic,
  onAvatarClickHandler,
  isHidden = false,
  children,
}: IImgWithInfo.IProps): ReactElement => {
  const ImageClasses = classNames(styles['header-wrapper'], classes);
  return (
    <div className={ImageClasses}>
      <div className={styles.header}>
        {ImageVariant === 'avatar' && (
          <Avatar
            size={avatarSize}
            variant={handleImgWithInfoVariant(isHidden, profilePic)}
            profilePic={profilePic}
            onClick={onAvatarClickHandler}
          />
        )}
      </div>
      {ImageVariant === 'icon' && children}
    </div>
  );
};

const Info = ({ classes, children }: IImgWithInfo.IProps): ReactElement => {
  const bodyClasses = classNames(classes);
  return <div className={bodyClasses}>{children}</div>;
};

ImgWithInfo.Image = Image;
ImgWithInfo.Info = Info;

export default ImgWithInfo;
