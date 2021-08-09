import React from 'react';
import type { FC, ReactElement } from 'react';
import Image from 'next/image';
import type { IFriendSuggestion } from './IFriendSuggestion';
import PlusIcon from './icons/plus.svg';
import DeleteIcon from './icons/delete.svg';
import styles from './FriendSuggestion.module.css';

const FriendSuggestion: FC<IFriendSuggestion.IProps> = ({
  profilePic,
  name,
  mutualFriends,
}): ReactElement => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <Image
          className="rounded-full"
          src={profilePic}
          width={40}
          height={40}
        />
        <div className="ml-4">
          <p>{name}</p>
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
