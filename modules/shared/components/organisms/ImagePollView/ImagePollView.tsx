import React from 'react';
import type { FC, ReactElement } from 'react';
import PostViewHeader from '../../molecules/PostViewHeader/PostViewHeader';
import PostViewFooter from '../../molecules/postFooter/PostFooter';
import type { IImagePollView } from './IImagePollView';
import ImagePollGroup from '../../molecules/ImagePollGroup/ImagePollGroup';

const ImagePollView: FC<IImagePollView.IProps> = ({ post }): ReactElement => {
  const firstIndex = 0;
  return (
    <div className="bg-white p-m shadow-soft rounded-md space-y-4" id={post.id}>
      <PostViewHeader
        id={post.id}
        date={new Date(post.created_at)}
        name={post.user.name}
        profilePic={post.user.profile_pic}
        isHidden={post.is_hidden}
        handlePostOptionsIconClick={(): boolean => {
          return true;
        }}
      />
      <div>
        <h3 className="font-normal text-md">{post.caption}</h3>
      </div>
      <ImagePollGroup group={post.options_groups.groups[firstIndex]} />
      <PostViewFooter numberOfVotes={100} showResult={false} />
    </div>
  );
};

export default ImagePollView;