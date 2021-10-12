import React from 'react';
import type { FC, ReactElement } from 'react';
import FriendSuggestion from '../../molecules/FriendSuggestion/FriendSuggestion';
import { dummyData } from './dummyData';
import Box from '../../atoms/Box/Box';

const FriendSuggestions: FC = (): ReactElement => {
  return (
    <Box isWhiteColor>
      <>
        <Box.Header withDevider>
          <p className="text-dark-grey text-sm font-normal">
            Friend Suggestions
          </p>
        </Box.Header>
        <Box.Body>
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
        </Box.Body>
      </>
    </Box>
  );
};

export default FriendSuggestions;
