import React from 'react';
import type { FC, ReactElement } from 'react';
import FriendSuggestion from '../../molecules/FriendSuggestion/FriendSuggestion';
import { dummyData } from './dummyData';
import Layer from '../../atoms/Layer/Layer';

const FriendSuggestions: FC = (): ReactElement => {
  return (
    <Layer isWhiteColor>
      <>
        <Layer.Header withDevider>
          <p className="text-dark-grey text-sm font-normal">
            Friend Suggestions
          </p>
        </Layer.Header>
        <Layer.Body>
          <div>
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
        </Layer.Body>
      </>
    </Layer>
  );
};

export default FriendSuggestions;
