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

  const username = name === undefined ? 'Anonymous' : name;

  return (
    <>
      <ImgWithInfo>
        <>
          <ImgWithInfo.Image
            ImageSize="medium"
            isHidden={isHidden}
            ImageVariant="avatar"
            profilePic={profilePic}
          />
          <ImgWithInfo.Info>
            <>
              <ImgWithInfo.Info.Title titleSize="small">
                <>
                  {username}
                  {isHidden && name && (
                    <span className="ml-2 text-grey text-xs">
                      (Posted Anonymously)
                    </span>
                  )}
                </>
              </ImgWithInfo.Info.Title>
              <ImgWithInfo.Info.SubTitle subTitleSize="small">
                <span title={`${exactDate(date)}`}>
                  {humanReadableDate(date)}
                </span>
              </ImgWithInfo.Info.SubTitle>
            </>
          </ImgWithInfo.Info>
        </>
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
