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
}): ReactElement => {
  const { totalVotes } = getVotesResults(post.options_groups.groups[0].options);
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
      <ImagePollGroup
        group={post.options_groups.groups[0]}
        addOneVote={addOneVote}
      />
      <PostViewFooter
        numberOfVotes={totalVotes}
        showResult={
          post.options_groups.groups[0].options[0].vote_count !== undefined
        }
      />
    </div>
  );
};

export default ImagePollView;
