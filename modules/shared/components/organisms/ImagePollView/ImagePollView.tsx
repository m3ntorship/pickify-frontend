import React from 'react';
import type { FC, ReactElement } from 'react';
import PostViewHeader from '../../molecules/PostViewHeader/PostViewHeader';
import PostViewFooter from '../../molecules/postFooter/PostFooter';
import type { IImagePollView } from './IImagePollView';
import ImagePollOption from '../../molecules/ImagePollOption/ImagePollOption';

const ImagePollView: FC<IImagePollView.IProps> = ({ post }): ReactElement => {
  const firstIndex = 0;
  const singleOption = 1;
  const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
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
      <div className="grid grid-cols-2 gap-x-2 gap-y-4">
        {post.options_groups.groups.map((group) => {
          return group.options.map((option, index) => {
            const letter = alphabet[index];
            return (
              <ImagePollOption
                key={option.id}
                imageUrl={option.media[firstIndex].url}
                isOneImageVote={group.options.length === singleOption}
                imgCaption={option.body}
                imgCaptionLetter={letter}
              />
            );
          });
        })}
      </div>
      <PostViewFooter />
    </div>
  );
};

export default ImagePollView;
