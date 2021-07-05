import React from 'react';
import type { FC, ReactElement } from 'react';
// import Image from 'next/image';
import type { IPostFeed } from '../../../types/postFeed/IPostFeed';
import MiniSurveyViewOptions from '../../molecules/MiniSurveyViewOptions/MiniSurveyViewOptions';
import PostViewHeader from '../../molecules/PostViewHeader/PostViewHeader';
import PostViewFooter from '../../molecules/postFooter/PostFooter';
import type { IMiniSurveyView } from './IMiniSurveyView';
import { getVotesResults } from '../../../logic/votesLogic/votesLogic';

const MiniSurveyView: FC<IMiniSurveyView.IProps> = ({
  post,
  optionCheckedId,
  addOneVote,
  deletePostHandler,
}): ReactElement => {
  const firstOption = 0;
  let votedOptions: IPostFeed.IOptions[] = [];
  post.options_groups.groups.map((group) => {
    const votes = group.options.map((option) => option);
    votedOptions = [...votedOptions, ...votes];
    return group;
  });
  const { totalVotes } = getVotesResults(votedOptions);
  return (
    <div className="bg-white p-m shadow-soft rounded-md space-y-4" id={post.id}>
      <PostViewHeader
        postId={post.id}
        date={new Date(post.created_at)}
        name={post.user.name}
        profilePic={post.user.profile_pic}
        isHidden={post.is_hidden}
        userId={post.user.id}
        deletePostHandler={deletePostHandler}
      />
      <div>
        <h3 className="font-normal text-md">{post.caption}</h3>
      </div>
      {/* <div>
        {post.media[indexOfImage].url && (
          <Image
            width={600}
            height={450}
            layout="responsive"
            src={post.media[indexOfImage].url}
            className="rounded-md"
          />
        )}
      </div> */}
      <MiniSurveyViewOptions
        optionsGroups={post.options_groups}
        addOneVote={addOneVote}
        optionCheckedId={optionCheckedId}
      />
      <PostViewFooter
        numberOfVotes={totalVotes}
        showResult={votedOptions[firstOption].vote_count !== undefined}
      />
    </div>
  );
};
export default MiniSurveyView;
