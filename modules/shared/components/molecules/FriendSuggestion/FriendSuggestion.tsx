import React from 'react';
import type { FC, ReactElement } from 'react';
import DeleteIcon from '@modules/shared/components/icons/deleteFriend.svg';
import {
  buttonSizeValues,
  buttonVariantValues,
} from '../../atoms/Button/types/EButton';
import type { IFriendSuggestion } from './IFriendSuggestion';
import PlusIcon from '../../icons/addFriend.svg';
import Button from '../../atoms/Button/Button';
import ImgWithInfo from '../ImgWithInfo/ImgWithInfo';

const FriendSuggestion: FC<IFriendSuggestion.IProps> = ({
  profilePic,
  username,
  mutualFriends,
}): ReactElement => {
  const subTitle = `${mutualFriends} ${
    mutualFriends > 1 ? 'Mutual Friends' : 'Mutual Friend'
  }`;

  return (
    <div className="flex justify-between items-center">
      <ImgWithInfo>
        <>
          <ImgWithInfo.Image
            ImageSize="medium"
            ImageVariant="avatar"
            profilePic={profilePic}
          />
          <ImgWithInfo.Info>
            <>
              <ImgWithInfo.Info.Title titleSize="small">
                {username}
              </ImgWithInfo.Info.Title>
              <ImgWithInfo.Info.SubTitle subTitleSize="small">
                {subTitle}
              </ImgWithInfo.Info.SubTitle>
            </>
          </ImgWithInfo.Info>
        </>
      </ImgWithInfo>
      <div className="flex">
        <div className="mr-2">
          <Button
            onlyIcon
            size={buttonSizeValues.SMALL}
            variant={buttonVariantValues.PRIMARY}
          >
            <PlusIcon />
          </Button>
        </div>

        <Button
          onlyIcon
          size={buttonSizeValues.SMALL}
          variant={buttonVariantValues.DELETE}
        >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default FriendSuggestion;
