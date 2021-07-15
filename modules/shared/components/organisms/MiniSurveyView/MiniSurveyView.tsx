import React from 'react';
import type { FC, ReactElement } from 'react';
import Image from 'next/image';
import type { IPostFeed } from '../../../types/postFeed/IPostFeed';
import MiniSurveyViewOptions from '../../molecules/MiniSurveyViewOptions/MiniSurveyViewOptions';
import PostViewHeader from '../../molecules/PostViewHeader/PostViewHeader';
import PostViewFooter from '../../molecules/postFooter/PostFooter';
import type { IMiniSurveyView } from './IMiniSurveyView';
import { getVotesResults } from '../../../logic/votesLogic/votesLogic';

const MiniSurveyView: FC<IMiniSurveyView.IProps> = ({
  post,
  addOneVote,
  deletePostHandler,
}): ReactElement => {
  let votedOptions: IPostFeed.IOptions[] = [];

  post.options_groups.groups.map((group) => {
    const votes = group.options.map((option) => option);
    votedOptions = [...votedOptions, ...votes];
    return group;
  });

  const showTotalVotes = (): boolean => {
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
        <h3 className="font-normal text-md">{post.caption}</h3>
      </div>
      {post.media.length !== 0 && (
        <>
          {post.media.map((image) => (
            <div key={image.url} className="relative">
              <div className="absolute w-full h-full rounded-md overflow-hidden">
                <Image
                  src={image.url}
                  layout="responsive"
                  className="filter blur-sm"
                  objectFit="cover"
                  width={600}
                  height={600}
                />
              </div>
              <Image
                src={image.url}
                layout="responsive"
                className="rounded-md"
                objectFit="contain"
                width={600}
                height={600}
              />
            </div>
          ))}
        </>
      )}
      <MiniSurveyViewOptions
        optionsGroups={post.options_groups}
        addOneVote={addOneVote}
      />
      <PostViewFooter
        numberOfVotes={totalVotes}
        showResult={showTotalVotes()}
      />
    </div>
  );
};
export default MiniSurveyView;
