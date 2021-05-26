import React from 'react';
import type { FC, ReactElement } from 'react';
import PostViewHeader from '../../molecules/PostViewHeader/Index';
import PostViewFooter from '../../molecules/postFooter/PostFooter';
import OptionGroup from '../../molecules/optionGroup/index';
import type { IPostViewWrapper } from './IPostViewWrapper';

const PostViewWrapper: FC<IPostViewWrapper.IProps> = ({
  postData,
}): ReactElement => {
  return (
    <div
      className="post-view-wrapper bg-white p-m shadow-dark rounded-md"
      id={postData.id}
    >
      <PostViewHeader
        id={postData.user?.id}
        date={new Date(postData.created_at)}
        size="medium"
        variant="filled"
        name={postData.user?.name}
        imgSrc={postData.user?.profile_pic}
      />
      <OptionGroup
        optionsGroups={postData.options_groups}
        caption={postData.caption}
      />
      <PostViewFooter />
    </div>
  );
};
export default PostViewWrapper;
