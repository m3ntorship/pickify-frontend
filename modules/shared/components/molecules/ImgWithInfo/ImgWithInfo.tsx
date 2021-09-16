import React from 'react';
import type { ReactElement } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './ImgWithInfo.module.css';
import type { IImgWithInfo } from './IImgWithInfo';
import Avatar from '../../atoms/Avatar/Avatar';
import { handleImgWithInfoVariant } from '../../../logic/imgWithInfoVariant/imgWithInfoVariant';

const ImgWithInfo = ({
  classes,
  children,
  isResponsive,
}: IImgWithInfo.IProps): ReactElement => {
  const infoClasses = classNames(
    styles['info-box'],
    {
      [styles['responsive-info-box']]: isResponsive,
    },
    classes,
  );
  return <div className={infoClasses}>{children}</div>;
};

const Image = ({
  classes,
  ImageSize,
  ImageVariant,
  profilePic,
  onAvatarClickHandler,
  isHidden = false,
  children,
  isResponsive,
  imagePath = '',
}: IImgWithInfo.IImage): ReactElement => {
  const ImageClasses = classNames(
    {
      'w-10 h-10': ImageSize === 'medium',
      'w-5xl h-5xl': ImageSize === 'super-large',
    },
    {
      [styles['responsive-image']]: isResponsive,
      'mr-4': !isResponsive,
    },
    classes,
  );

  const imageComp = (
    <div className={ImageClasses}>
      {ImageVariant === 'avatar' && (
        <Avatar
          size={ImageSize}
          variant={handleImgWithInfoVariant(isHidden, profilePic)}
          profilePic={profilePic}
          onClick={onAvatarClickHandler}
        />
      )}
      {ImageVariant === 'icon' && children}
    </div>
  );

  return (
    <>
      {imagePath.length === 0 ? (
        <>{imageComp}</>
      ) : (
        <Link href={imagePath}>
          <a>{imageComp}</a>
        </Link>
      )}
    </>
  );
};

const Info = ({
  classes,
  children,
  isResponsive,
}: IImgWithInfo.IProps): ReactElement => {
  const infoWrapperClasses = classNames(
    styles['info-wrapper'],
    {
      [styles['responsive-info-wrapper']]: isResponsive,
    },
    classes,
  );
  return <div className={infoWrapperClasses}>{children}</div>;
};

const Title = ({
  classes,
  children,
  titleSize,
  titlePath = '',
}: IImgWithInfo.ITitle): ReactElement => {
  const titleClasses = classNames(
    styles.title,
    {
      'text-sm': titleSize === 'small',
      'text-base': titleSize === 'medium',
      'text-lg': titleSize === 'large',
    },
    classes,
  );
  return (
    <>
      {titlePath.length === 0 ? (
        <h3 className={titleClasses}>{children}</h3>
      ) : (
        <Link href={titlePath}>
          <a>
            <h3 className={titleClasses}>{children}</h3>
          </a>
        </Link>
      )}
    </>
  );
};

const SubTitle = ({
  classes,
  children,
  subTitleSize,
  subTitlePath = '',
}: IImgWithInfo.ISubTitle): ReactElement => {
  const subTitleClasses = classNames(
    styles.subTitle,
    {
      'text-xs': subTitleSize === 'small',
      'text-sm': subTitleSize === 'medium',
    },
    classes,
  );
  return (
    <>
      {subTitlePath.length === 0 ? (
        <h5 className={subTitleClasses}>{children}</h5>
      ) : (
        <Link href={subTitlePath}>
          <a>
            <h5 className={subTitleClasses}>{children}</h5>
          </a>
        </Link>
      )}
    </>
  );
};

const MoreInfo = ({ classes, children }: IImgWithInfo.IProps): ReactElement => {
  const moreInfoClasses = classNames('mt-2', classes);
  return <div className={moreInfoClasses}>{children}</div>;
};

ImgWithInfo.Image = Image;
ImgWithInfo.Info = Info;
Info.Title = Title;
Info.SubTitle = SubTitle;
Info.MoreInfo = MoreInfo;

export default ImgWithInfo;
