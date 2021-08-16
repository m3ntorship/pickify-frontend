import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IFriendSuggestion } from './IFriendSuggestion';
import PlusIcon from '../../icons/addFriend.svg';
import DeleteIcon from '../../icons/deleteFriend.svg';
import styles from './FriendSuggestion.module.css';
import UserInfo from '../UserInfo/UserInfo';

const FriendSuggestion: FC<IFriendSuggestion.IProps> = ({
  profilePic,
  username,
  mutualFriends,
}): ReactElement => {
  const subTitle = `${mutualFriends} ${
    mutualFriends > 1 ? 'Mutual Friends' : 'Mutual Friend'
  }`;

  return (
    <div className="flex justify-between">
      <UserInfo
        isHidden={false}
        variant="avatar"
        title={username}
        profilePic={profilePic}
        subTitle={subTitle}
      />
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
