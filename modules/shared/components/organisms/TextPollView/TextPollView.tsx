import React from 'react';
import type { FC, ReactElement } from 'react';
import PostViewHeader from '../../molecules/PostViewHeader/PostViewHeader';
import PostViewFooter from '../../molecules/postFooter/PostFooter';
import type { ITextPollView } from './ITextPollView';
import TextPollViewOptions from '../../molecules/TextPollViewOptions/TextPollViewOptions';
import { getVotesResults } from '../../../logic/votesLogic/votesLogic';

const PostViewWrapper: FC<ITextPollView.IProps> = ({
  post,
  optionCheckedId,
  onOptionClick,
}): ReactElement => {
  const firstGroup = 0;
  const { totalVotes } = getVotesResults(
    post.options_groups.groups[firstGroup].options,
  );

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
        optionCheckedId={optionCheckedId}
      />
      <div>
        <PostViewFooter numberOfVotes={totalVotes} showResult={false} />
      </div>
    </div>
  );
};
export default PostViewWrapper;
