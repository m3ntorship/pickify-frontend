import React from 'react';
import type { FC, ReactElement } from 'react';
import Image from 'next/image';
import type { IPostFeed } from '../../../types/postFeed/IPostFeed';
import MiniSurveyViewOptions from '../../molecules/MiniSurveyViewOptions/MiniSurveyViewOptions';
import PostViewHeader from '../../molecules/PostViewHeader/PostViewHeader';
import PostViewFooter from '../../molecules/postFooter/PostFooter';
import type { IMiniSurveyView } from './IMiniSurveyView';
import { getVotesResults } from '../../../logic/votesLogic/votesLogic';
import { apiUrls } from '../../../configuration/ConfigPostCreation/config';

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
      {post.media.length !== 0 && (
        <>
          {post.media.map((image) => (
            <div key={image.url} className="relative">
              <div className="absolute w-full h-full rounded-md overflow-hidden">
                <Image
                  key={image.url}
                  src={`${apiUrls.mediaAPI}${image.url}`}
                  layout="responsive"
                  className="filter blur-sm"
                  objectFit="cover"
                  width={600}
                  height={600}
                />
              </div>
              <Image
                src={`${apiUrls.mediaAPI}${image.url}`}
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
