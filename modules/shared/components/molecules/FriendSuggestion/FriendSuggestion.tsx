import React from 'react';
import type { FC, ReactElement } from 'react';
import {
  buttonSizeValues,
  buttonVariantValues,
} from '../../atoms/Button/types/EButton';
import type { IFriendSuggestion } from './IFriendSuggestion';
import PlusIcon from '../../icons/addFriend.svg';
import DeleteIcon from '../../icons/deleteFriend.svg';
import Avatar from '../../atoms/Avatar/Avatar';
import Button from '../../atoms/Button/Button';

const FriendSuggestion: FC<IFriendSuggestion.IProps> = ({
  profilePic,
  username,
  mutualFriends,
}): ReactElement => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <Avatar variant="filled" profilePic={profilePic} size="medium" />
        <div className="ml-4">
          <p>{username}</p>
          <p className="text-xs font-light text-dark-grey">
            {mutualFriends > 1
              ? `${mutualFriends} Mutual Friends`
              : `${mutualFriends} Mutual Friend`}
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="mr-2">
          <Button
            onlyIcon
            size={buttonSizeValues.LARGE}
            variant={buttonVariantValues.PRIMARY}
            width={32}
            height={32}
          >
            <PlusIcon />
          </Button>
        </div>

        <Button
          onlyIcon
          size={buttonSizeValues.LARGE}
          variant={buttonVariantValues.DELETE}
          width={32}
          height={32}
        >
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default FriendSuggestion;
