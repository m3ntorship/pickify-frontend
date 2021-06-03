import React from 'react';
import type { FC, ReactElement } from 'react';
import PostViewHeader from '../../molecules/PostViewHeader/PostViewHeader';
import PostViewFooter from '../../molecules/postFooter/PostFooter';
import OptionGroup from '../../molecules/optionGroup/OptionGroup';
import type { IPostViewWrapper } from './IPostViewWrapper';

const PostViewWrapper: FC<IPostViewWrapper.IProps> = ({
  post,
}): ReactElement => {
  return (
    <div
      className="post-view-wrapper bg-white p-m shadow-soft rounded-md"
      id={post.id}
    >
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
      <OptionGroup optionsGroups={post.options_groups} caption={post.caption} />
      <PostViewFooter />
    </div>
  );
};
export default PostViewWrapper;
