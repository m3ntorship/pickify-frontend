import React from 'react';
import type { ReactElement, FC } from 'react';
import Divider from '../../atoms/Divider/Divider';
import type { IPostViewHeader } from './IPostViewHeader';
import * as EDivider from '../../atoms/Divider/types/EDivider';
import UserInfo from '../UserInfo/UserInfo';
import DropDown from '../../atoms/DropDown/DropDown';
import { options } from '../../atoms/DropDown/mockedOptions';

const getPostOptions = (
  updatedOptions: { id: string; body: string }[],
  userId: string,
): { id: string; body: string }[] => {
  const loggedInUser = localStorage.getItem('user');
  if (userId !== loggedInUser) {
    return updatedOptions.filter((option) => option.id !== 'delete');
  }
  return options;
};

const PostViewHeader: FC<IPostViewHeader.IProps> = ({
  profilePic,
  name,
  userId,
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
        console.log('reported');
        break;
      case 'save':
        console.log('saved');
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
        <DropDown
          onOptionMenuClick={onOptionClickHandler}
          options={getPostOptions(options, userId)}
        />
      </div>
      <Divider type={EDivider.DividerType.Horizontal} length="100%" />
    </>
  );
};

export default PostViewHeader;
