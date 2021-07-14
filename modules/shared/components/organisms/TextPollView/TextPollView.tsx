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
}): ReactElement => {
  const firstGroup = 0;
  const { totalVotes } = getVotesResults(
    post.options_groups.groups[firstGroup].options,
  );

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
        />
      </div>
    </div>
  );
};
export default PostViewWrapper;
