import React from 'react';
import type { ReactElement } from 'react';
import Avatar from '../../atoms/Avatar/Avatar';
import { images } from './images';
import Box from '../../atoms/Box/Box';

const DeveloperPics = (): ReactElement => {
  return (
    <Box isWhiteColor>
      <>
        <Box.Header withDevider>
          <p className="text-dark-grey text-sm font-normal">Made by: </p>
        </Box.Header>
        <Box.Body>
          <div className="flex flex-wrap space-y-1">
            {images.map((image) => (
              <div className="mr-2" key={image} data-testid="developer-pic">
                <Avatar variant="filled" size="medium" profilePic={image} />
              </div>
            ))}
          </div>
        </Box.Body>
      </>
    </Box>
  );
};

export default DeveloperPics;
