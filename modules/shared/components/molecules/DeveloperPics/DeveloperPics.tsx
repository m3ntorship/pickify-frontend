import React from 'react';
import type { ReactElement } from 'react';
import Avatar from '../../atoms/Avatar/Avatar';
import { images } from './images';

const DeveloperPics = (): ReactElement => {
  return (
    <>
      <p className="text-dark-grey mb-4">Made by: </p>
      <div className="flex flex-wrap space-y-1">
        {images.map((image) => (
          <div className="mr-2" key={image} data-testid="developer-pic">
            <Avatar variant="filled" size="medium" profilePic={image} />
          </div>
        ))}
      </div>
    </>
  );
};

export default DeveloperPics;
