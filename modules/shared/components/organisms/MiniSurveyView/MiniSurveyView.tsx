import React from 'react';
import type { FC, ReactElement } from 'react';
import { EPostType } from '../../../types/postFeed/EPostType';
import type { IPostFeed } from '../../../types/postFeed/IPostFeed';
import MiniSurveyViewOptions from '../../molecules/MiniSurveyViewOptions/MiniSurveyViewOptions';
import PostViewHeader from '../../molecules/PostViewHeader/PostViewHeader';
import PostViewFooter from '../../molecules/postFooter/PostFooter';
import type { IMiniSurveyView } from './IMiniSurveyView';
import { getVotesResults } from '../../../logic/votesLogic/votesLogic';
import ImageView from '../../atoms/ImageView/ImageView';

const MiniSurveyView: FC<IMiniSurveyView.IProps> = ({
  post,
  addOneVote,
  deletePostHandler,
  sharePostHandler,
}): ReactElement => {
  let votedOptions: IPostFeed.IOptions[] = [];

  post.options_groups.groups.map((group) => {
    const votes = group.options.map((option) => option);
    votedOptions = [...votedOptions, ...votes];
    return group;
  });

  const isVoted = (): boolean => {
    const totalVotes = votedOptions.filter(
      (option) => option.vote_count !== undefined,
    );
    if (totalVotes.length > 0) {
      return true;
    }
    return false;
  };

  const { totalVotes } = getVotesResults(votedOptions);
  const { user } = post;
  return (
    <div className="bg-white p-m shadow-soft rounded-md space-y-4" id={post.id}>
      <PostViewHeader
        postId={post.id}
        userId={user ? user.id : ''}
        date={new Date(post.created_at)}
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
      {post.media.length !== 0 && (
        <>
          {post.media.map((image) => (
            <ImageView
              key={image.url}
              imgSrc={image.url}
              id={image.url}
              imgAlt="post"
            />
          ))}
        </>
      )}
      <MiniSurveyViewOptions
        type={EPostType.MiniSurvey}
        optionsGroups={post.options_groups}
        addOneVote={addOneVote}
        showExpandButton={isVoted()}
      />
      <PostViewFooter
        numberOfVotes={totalVotes}
        showResult={isVoted()}
        sharePostHandler={sharePostHandler}
        postId={post.id}
      />
    </div>
  );
};
export default MiniSurveyView;
