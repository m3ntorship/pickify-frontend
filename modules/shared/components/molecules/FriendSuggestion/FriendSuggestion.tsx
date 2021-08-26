import React from 'react';
import type { FC, ReactElement } from 'react';
import DeleteIcon from '@modules/shared/components/icons/deleteFriend.svg';
import {
  buttonSizeValues,
  buttonVariantValues,
} from '../../atoms/Button/types/EButton';
import type { IFriendSuggestion } from './IFriendSuggestion';
import PlusIcon from '../../icons/addFriend.svg';
import ImgWithInfo from '../ImgWithInfo/ImgWithInfo';
import Button from '../../atoms/Button/Button';

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
      <ImgWithInfo
        isHidden={false}
        variant="avatar"
        title={username}
        profilePic={profilePic}
        subTitle={subTitle}
      />
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
