import React from 'react';
import type { ReactElement } from 'react';
import Avatar from '../../atoms/Avatar/Avatar';
import { images } from './images';
import Layer from '../../atoms/Layer/Layer';

const DeveloperPics = (): ReactElement => {
  return (
    <Layer isWhiteColor>
      <>
        <Layer.Header withDevider>
          <p className="text-dark-grey text-sm font-normal">Made by: </p>
        </Layer.Header>
        <Layer.Body>
          <div className="flex flex-wrap space-y-1">
            {images.map((image) => (
              <div className="mr-2" key={image} data-testid="developer-pic">
                <Avatar variant="filled" size="medium" profilePic={image} />
              </div>
            ))}
          </div>
        </Layer.Body>
      </>
    </Layer>
  );
};

export default DeveloperPics;
