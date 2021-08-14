import React from 'react';
import type { FC, ReactElement } from 'react';
import FriendSuggestion from '../../molecules/FriendSuggestion/FriendSuggestion';
import { dummyData } from './dummyData';
import Divider from '../../atoms/Divider/Divider';

const FriendSuggestions: FC = (): ReactElement => {
  return (
    <>
      <p className="text-dark-grey mb-3">Friend Suggestions</p>
      <Divider type="horizontal" length="100%" />
      <div className="mt-4">
        {dummyData.map((friendSuggestion) => (
          <div
            className="mt-3"
            data-testid="friend-suggestion"
            key={friendSuggestion.id}
          >
            <FriendSuggestion
              profilePic={friendSuggestion.profilePic}
              username={friendSuggestion.username}
              mutualFriends={friendSuggestion.mutualFriends}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FriendSuggestions;
