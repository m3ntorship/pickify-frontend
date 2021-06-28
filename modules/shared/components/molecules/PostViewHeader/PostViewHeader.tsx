import React from 'react';
import type { ReactElement, FC } from 'react';
import Divider from '../../atoms/Divider/Divider';
import type { IPostViewHeader } from './IPostViewHeader';
import * as EDivider from '../../atoms/Divider/types/EDivider';
import UserInfo from '../UserInfo/UserInfo';
import DropDown from '../../atoms/DropDown/DropDown';
import { options } from '../../atoms/DropDown/mockedOptions';

const PostViewHeader: FC<IPostViewHeader.IProps> = ({
  profilePic,
  name,
  date,
  deletePostHandler,
  postId,
  isHidden,
}): ReactElement => {
  const onOptionClickHandler = (id: string): void => {
    switch (id) {
      case 'delete':
        deletePostHandler(postId);
        break;
      case 'report':
        console.log('report');
        break;
      case 'save':
        console.log('save');
        break;
      default:
        console.log('default');
    }
  };

  return (
    <>
      <div className="flex justify-between items-start pb-s">
        <UserInfo
          isHidden={isHidden}
          profilePic={profilePic}
          name={name}
          date={date}
        />
        <DropDown onOptionMenuClick={onOptionClickHandler} options={options} />
      </div>
      <Divider type={EDivider.DividerType.Horizontal} length="100%" />
    </>
  );
};

export default PostViewHeader;
