import React from 'react';
import type { ReactElement, FC } from 'react';
import type { PostViewFooterTypes } from './PostViewFooterTypes';
import ShareIcon from '../../icons/share.svg';

const PostViewFooter: FC<PostViewFooterTypes.IProps> = ({
  handleShareClick,
  voters,
  votersPlaceHolder,
  id,
}): ReactElement => {
  return (
    <div className="flex justify-between items-center text-grey mt-m">
      <span>{voters ? `${voters} Votes` : votersPlaceHolder}</span>
      <ShareIcon
        onClick={handleShareClick}
        className="fill-grey"
        data-testid={id}
      />
    </div>
  );
};

export default PostViewFooter;
