import React from 'react';
import type { ReactElement, FC } from 'react';
import Divider from '../../atoms/Divider/Divider';
import VerticalThreeDotsIcon from '../../icons/verticalThreeDots.svg';
import type { IPostViewHeader } from './IPostViewHeader';
import * as EDivider from '../../atoms/Divider/types/EDivider';
import UserInfo from '../UserInfo/UserInfo';

const PostViewHeader: FC<IPostViewHeader.IProps> = ({
  profilePic,
  name,
  date,
  handlePostOptionsIconClick,
  id,
  isHidden,
}): ReactElement => {
  return (
    <div>
      <div className="flex justify-between items-start pb-s">
        <UserInfo
          isHidden={isHidden}
          profilePic={profilePic}
          name={name}
          date={date}
        />
        <VerticalThreeDotsIcon
          onClick={handlePostOptionsIconClick}
          className="fill-grey cursor-pointer w-6 h-6"
          data-testid={id}
        />
      </div>
      <Divider type={EDivider.DividerType.Horizontal} length="100%" />
    </div>
  );
};

export default PostViewHeader;
