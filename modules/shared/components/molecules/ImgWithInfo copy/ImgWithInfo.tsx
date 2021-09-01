import React from 'react';
import type { ReactElement } from 'react';
import classNames from 'classnames';
import styles from './ImgWithInfoDemo.module.css';
import type { IImgWithInfoDemo } from './IImgWithInfoDemo';
import Avatar from '../../atoms/Avatar/Avatar';
// this line case an error when we ran the test, the error : cannot find module or it is corresponding type
// import { handleImgWithInfoVariant } from '@modules/shared/logic/imgWithInfoVariant/imgWithInfoVariant';
import { handleImgWithInfoVariant } from '../../../logic/imgWithInfoVariant/imgWithInfoVariant';

const ImgWithInfoDemo = ({
  classes,
  children,
}: IImgWithInfoDemo.IProps): ReactElement => {
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
}: IImgWithInfoDemo.IProps): ReactElement => {
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

const Info = ({ classes, children }: IImgWithInfoDemo.IProps): ReactElement => {
  const bodyClasses = classNames(classes);
  return <div className={bodyClasses}>{children}</div>;
};

ImgWithInfoDemo.Image = Image;
ImgWithInfoDemo.Info = Info;

export default ImgWithInfoDemo;
