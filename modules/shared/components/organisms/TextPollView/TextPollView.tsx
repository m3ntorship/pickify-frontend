import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import PostViewHeader from '../../molecules/PostViewHeader/PostViewHeader';
import PostViewFooter from '../../molecules/postFooter/PostFooter';
import type { ITextPollView } from './ITextPollView';
import TextPollViewOptions from '../../molecules/TextPollViewOptions/TextPollViewOptions';
import { getVotesResults } from '../../../logic/votesLogic/votesLogic';

const PostViewWrapper: FC<ITextPollView.IProps> = ({
  post,
  addOneVote,
}): ReactElement => {
  const firstGroup = 0;
  const { totalVotes } = getVotesResults(
    post.options_groups.groups[firstGroup].options,
  );
  const [isOptionChecked, setIsOptionChecked] = useState(false);
  const [optionCheckedId, setOptionCheckedId] = useState('');

  const onOptionClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setIsOptionChecked(true);
    setOptionCheckedId(e.currentTarget.id);
    addOneVote(e.currentTarget.id);
  };
  return (
    <div className="bg-white p-m shadow-soft rounded-md space-y-4" id={post.id}>
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
      <div>
        <h3 className="font-normal text-md">{post.caption}</h3>
      </div>
      <TextPollViewOptions
        optionsGroups={post.options_groups}
        onOptionClick={onOptionClick}
        isOptionChecked={isOptionChecked}
        optionCheckedId={optionCheckedId}
      />
      <div>
        <PostViewFooter
          numberOfVotes={totalVotes}
          showResult={!isOptionChecked}
        />
      </div>
    </div>
  );
};
export default PostViewWrapper;
