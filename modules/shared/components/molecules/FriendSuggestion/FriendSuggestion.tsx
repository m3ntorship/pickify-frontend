import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IFriendSuggestion } from './IFriendSuggestion';
import PlusIcon from '../../icons/addFriend.svg';
import DeleteIcon from '../../icons/deleteFriend.svg';
import styles from './FriendSuggestion.module.css';
import Avatar from '../../atoms/Avatar/Avatar';

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
        <button className={styles.plus} type="button">
          <PlusIcon />
        </button>
        <button className={styles.delete} type="button">
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default FriendSuggestion;
