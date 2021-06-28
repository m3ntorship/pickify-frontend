import React from 'react';
import type { FC, ReactElement } from 'react';
import PostViewHeader from '../../molecules/PostViewHeader/PostViewHeader';
import PostViewFooter from '../../molecules/postFooter/PostFooter';
import type { ITextPollView } from './ITextPollView';
import TextPollViewOptions from '../../molecules/TextPollViewOptions/TextPollViewOptions';

const PostViewWrapper: FC<ITextPollView.IProps> = ({
  post,
  deletePostHandler,
}): ReactElement => {
  return (
    <div className="bg-white p-m shadow-soft rounded-md space-y-4" id={post.id}>
      <PostViewHeader
        postId={post.id}
        userId={post.user.id}
        date={new Date(post.created_at)}
        name={post.user.name}
        profilePic={post.user.profile_pic}
        isHidden={post.is_hidden}
        deletePostHandler={deletePostHandler}
      />
      <div>
        <h3 className="font-normal text-md">{post.caption}</h3>
      </div>
      <TextPollViewOptions optionsGroups={post.options_groups} />
      <div>
        <PostViewFooter />
      </div>
    </div>
  );
};
export default PostViewWrapper;
