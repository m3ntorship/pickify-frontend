import React from 'react';
import type { FC, ReactElement } from 'react';
import PostViewHeader from '../../molecules/PostViewHeader/PostViewHeader';
import PostViewFooter from '../../molecules/postFooter/PostFooter';
import type { ITextPollView } from './ITextPollView';
import TextPollViewOptions from '../../molecules/TextPollViewOptions/TextPollViewOptions';
import { getVotesResults } from '../../../logic/votesLogic/votesLogic';

const PostViewWrapper: FC<ITextPollView.IProps> = ({
  post,
  addOneVote,
  deletePostHandler,
  sharePostHandler,
}): ReactElement => {
  const firstGroup = 0;
  const { totalVotes } = getVotesResults(
    post.options_groups.groups[firstGroup].options,
  );

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
      <TextPollViewOptions
        optionsGroups={post.options_groups}
        addOneVote={addOneVote}
      />
      <div>
        <PostViewFooter
          numberOfVotes={totalVotes}
          showResult={
            post.options_groups.groups[firstGroup].options[firstGroup]
              .vote_count !== undefined
          }
          sharePostHandler={sharePostHandler}
          postId={post.id}
        />
      </div>
    </div>
  );
};
export default PostViewWrapper;
