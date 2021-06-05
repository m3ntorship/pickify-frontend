import React from 'react';
import type { FC, ReactElement } from 'react';
import PostViewHeader from '../../molecules/PostViewHeader/PostViewHeader';
import PostViewFooter from '../../molecules/postFooter/PostFooter';
import type { ITextPollView } from './ITextPollView';
import TextPollViewOptions from '../../molecules/TextPollViewOptions/TextPollViewOptions';

const PostViewWrapper: FC<ITextPollView.IProps> = ({ post }): ReactElement => {
  return (
    <div className="bg-white p-m shadow-soft rounded-md" id={post.id}>
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
        <h3 className="font-normal text-md my-m">{post.caption}</h3>
      </div>
      <TextPollViewOptions optionsGroups={post.options_groups} />
      <PostViewFooter />
    </div>
  );
};
export default PostViewWrapper;
