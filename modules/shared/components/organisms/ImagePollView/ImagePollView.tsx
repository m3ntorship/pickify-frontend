import React from 'react';
import type { FC, ReactElement } from 'react';
import PostViewHeader from '../../molecules/PostViewHeader/PostViewHeader';
import PostViewFooter from '../../molecules/postFooter/PostFooter';
import type { IImagePollView } from './IImagePollView';
import ImagePollGroup from '../../molecules/ImagePollGroup/ImagePollGroup';
import { getVotesResults } from '../../../logic/votesLogic/votesLogic';

const ImagePollView: FC<IImagePollView.IProps> = ({
  post,
  deletePostHandler,
  addOneVote,
  sharePostHandler,
}): ReactElement => {
  const { totalVotes } = getVotesResults(post.options_groups.groups[0].options);
  const { user } = post;
  return (
    <div className="bg-white p-m shadow-soft rounded-md space-y-4" id={post.id}>
      <PostViewHeader
        postId={post.id}
        userId={user ? user.id : ''}
        date={post.created_at}
        name={user ? user.name : undefined}
        profilePic={user ? user.profile_pic : undefined}
        isHidden={post.is_hidden}
        deletePostHandler={deletePostHandler}
      />
      <div>
        <h3 className="font-normal text-md" dir="auto">
          {post.caption}
        </h3>
      </div>
      <ImagePollGroup
        group={post.options_groups.groups[0]}
        addOneVote={addOneVote}
      />
      <PostViewFooter
        numberOfVotes={totalVotes}
        showResult={
          post.options_groups.groups[0].options[0].vote_count !== undefined
        }
        sharePostHandler={sharePostHandler}
        postId={post.id}
      />
    </div>
  );
};

export default ImagePollView;
