import React from 'react';
import type { FC, ReactElement } from 'react';
import FriendSuggestion from '../../molecules/FriendSuggestion/FriendSuggestion';
import { dummyData } from './dummyData';
import Divider from '../../atoms/Divider/Divider';

const FriendSuggestions: FC = (): ReactElement => {
  return (
    <>
      <p className="text-dark-grey">Friend Suggestions</p>
      <Divider type="horizontal" length="100%" />
      {dummyData.map((friendSuggestion) => (
        <div
          className="mt-3"
          data-testid="friend-suggestion"
          key={friendSuggestion.id}
        >
          <FriendSuggestion
            profilePic={friendSuggestion.profilePic}
            username={friendSuggestion.name}
            mutualFriends={friendSuggestion.mutualFriends}
          />
        </div>
      ))}
    </>
  );
};

export default FriendSuggestions;
