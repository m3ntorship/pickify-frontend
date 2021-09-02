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
        <div className="flex w-min">
          <ImgWithInfo.Image
            avatarSize="medium"
            variant="filled"
            isHidden={false}
            ImageVariant="avatar"
            profilePic={profilePic}
          />
          <ImgWithInfo.Info classes="max-w-13xl flex flex-col justify-between ml-4 whitespace-nowrap">
            <h1 className="text-sm font-normal text-dark">{username}</h1>
            <p className="text-dark-grey text-xs font-light">{subTitle}</p>
          </ImgWithInfo.Info>
        </div>
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
