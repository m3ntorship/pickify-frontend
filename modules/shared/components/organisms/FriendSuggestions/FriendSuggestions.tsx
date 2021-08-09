import React from 'react';
import type { FC, ReactElement } from 'react';
import FriendSuggestion from '../../molecules/FriendSuggestion/FriendSuggestion';
import { dummyData } from './dummyData';

const FriendSuggestions: FC = (): ReactElement => {
  return (
    <>
      <p className="text-dark-grey">Friend Suggestions</p>
      <hr className="border-grey-shd6 my-4" />
      {dummyData.map((friendSuggestion) => (
        <div
          className="mt-3"
          data-testid="friend-suggestion"
          key={friendSuggestion.id}
        >
          <FriendSuggestion
            profilePic={friendSuggestion.profilePic}
            name={friendSuggestion.name}
            mutualFriends={friendSuggestion.mutualFriends}
          />
        </div>
      ))}
    </>
  );
};

export default FriendSuggestions;
