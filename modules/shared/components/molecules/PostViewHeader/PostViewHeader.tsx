import React from 'react';
import type { ReactElement, FC } from 'react';
import VerticalThreeDotsIcon from '../../icons/verticalThreeDots.svg';
import type { IPostViewHeader } from './IPostViewHeader';
import DropDown from '../../atoms/DropDown/DropDown';
import { options } from '../../atoms/DropDown/mockedOptions';
import { getUserUUID } from '../../../logic/userAuth/userAuth';
import {
  humanReadableDate,
  exactDate,
} from '../../../logic/formatDate/FormatDate';
import ImgWithInfo from '../ImgWithInfo/ImgWithInfo';

const getPostMenuOptions = (
  updatedOptions: { id: string; body: string }[],
  userId: string,
): { id: string; body: string }[] => {
  if (process.browser) {
    const loggedInUser = getUserUUID();
    if (userId !== loggedInUser) {
      return updatedOptions.filter((option) => option.id !== 'delete');
    }
    return updatedOptions;
  }
  return updatedOptions;
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
  const onMenuOptionClickHandler = (id: string): void => {
    switch (id) {
      case 'delete':
        deletePostHandler(postId);
        break;
      case 'report':
        break;
      case 'save':
        break;
      default:
    }
  };
  // const userName = name?.length !== 0 ? name : 'Anonymous';

  return (
    <>
      {/* <ImgWithInfo
        isHidden={isHidden}
        profilePic={profilePic}
        title={name ?? ''}
        subTitle={humanReadableDate(date)}
        description={exactDate(date)}
        variant="avatar"
      /> */}
      <ImgWithInfo>
        <div className="flex w-min">
          <ImgWithInfo.Image
            avatarSize="medium"
            variant="filled"
            isHidden={isHidden}
            ImageVariant="avatar"
            profilePic={profilePic}
          />
          <ImgWithInfo.Info classes="text-xs font-light	text-dark-grey block max-w-13xl flex flex-col justify-between ml-4 whitespace-nowrap">
            <div className="flex flex-row">
              <h1 className="text-sm font-normal text-dark">
                {name ?? 'Anonymous'}
              </h1>
              {isHidden && name && (
                <span className="ml-2 text-grey text-xs truncate">
                  (anonymous)
                </span>
              )}
            </div>
            <span title={`${exactDate(date)}`}>{humanReadableDate(date)}</span>
          </ImgWithInfo.Info>
        </div>
      </ImgWithInfo>

      <DropDown
        onOptionMenuClick={onMenuOptionClickHandler}
        options={getPostMenuOptions(options, userId)}
        variant="post"
        size="sm"
      >
        <VerticalThreeDotsIcon className="fill-grey w-6 h-6" />
      </DropDown>
    </>
  );
};

export default PostViewHeader;
