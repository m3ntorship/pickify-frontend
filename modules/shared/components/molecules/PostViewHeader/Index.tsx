import React from 'react';
import Divider from '../../atoms/Divider/Divider';
import type { ReactElement, FC } from 'react';
import VerticalThreeDotsIcon from '../../icons/verticalThreeDots.svg';
import type { PostViewHeaderTypes } from './PostViewHeaderTypes';
import UserInfo from '../UserInfo/Index';
import * as EDivider from '../../atoms/Divider/types/EDivider';

const PostViewHeader: FC<PostViewHeaderTypes.IProps> = ({
  size = 'medium',
  variant,
  imgSrc,
  name,
  date,
  handleEditIconClick,
  id,
}): ReactElement => {
  return (
    <div>
      <div className="flex justify-between items-start pb-s">
        <UserInfo
          size={size}
          variant={variant}
          imgSrc={imgSrc}
          name={name}
          date={date}
        />
        <VerticalThreeDotsIcon
          onClick={handleEditIconClick}
          className="fill-grey cursor-pointer"
          data-testid={id}
        />
      </div>
      <Divider type={EDivider.DividerType.Horizontal} length="100%" />
    </div>
  );
};

export default PostViewHeader;
