import withErrorHandler from '@modules/shared/components/HOC/WithErrorHandler/WithErrorHandler';
import { getVotesResults } from '@modules/shared/logic/votesLogic/votesLogic';
import { EPostType } from '@modules/shared/types/postFeed/EPostType';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import type { FC, ReactElement } from 'react';
import { toast } from 'react-toastify';
import ImageView from '../../atoms/ImageView/ImageView';
import Box from '../../atoms/Box/Box';
import ImagePollGroup from '../../molecules/ImagePollGroup/ImagePollGroup';
import MiniSurveyViewOptions from '../../molecules/MiniSurveyViewOptions/MiniSurveyViewOptions';
import PostViewFooter from '../../molecules/postFooter/PostFooter';
import PostViewHeader from '../../molecules/PostViewHeader/PostViewHeader';
import TextPollViewOptions from '../../molecules/TextPollViewOptions/TextPollViewOptions';
import type { IPost } from './ISinglePostView';

export const sharePostHandler = async (
  postId: string,
  setCopied: (copied: boolean) => void,
  copied: boolean,
): Promise<void> => {
  if (typeof window !== 'undefined') {
    const baseUrl = window.location.href;
    try {
      if (!baseUrl.includes('/posts/')) {
        await navigator.clipboard.writeText(`${baseUrl}posts/${postId}`);
      } else {
        await navigator.clipboard.writeText(baseUrl);
      }
      setCopied(!copied);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err: unknown) {
      const { message } = err as { message: string };
      toast.error(message);
    }
  }
};

const SinglePostView: FC<IPost.Props> = ({
  post,
  deletePostHandler,
  addOneVoteHandler,
}): ReactElement => {
  const postType = post.type.toLowerCase();
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
    <Box isWhiteColor>
      <>
        <Box.Header withDevider>
          <PostViewHeader
            postId={post.id}
            userId={user ? user.id : ''}
            date={post.created_at}
            name={user ? user.name : undefined}
            profilePic={user ? user.profile_pic : undefined}
            isHidden={post.is_hidden}
            deletePostHandler={deletePostHandler}
          />
        </Box.Header>
        <Box.Body>
          <>
            <div className="space-y-4">
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
              {postType === EPostType.TextPoll && (
                <TextPollViewOptions
                  optionsGroups={post.options_groups}
                  addOneVote={addOneVoteHandler}
                />
              )}
              {postType === EPostType.MiniSurvey && (
                <MiniSurveyViewOptions
                  type={EPostType.MiniSurvey}
                  optionsGroups={post.options_groups}
                  addOneVote={addOneVoteHandler}
                  showExpandButton={isVoted()}
                />
              )}
              {postType === EPostType.ImagePoll && (
                <ImagePollGroup
                  group={post.options_groups.groups[0]}
                  addOneVote={addOneVoteHandler}
                />
              )}
            </div>
          </>
        </Box.Body>
        <Box.Footer>
          <PostViewFooter
            numberOfVotes={totalVotes}
            showResult={isVoted()}
            sharePostHandler={sharePostHandler}
            postId={post.id}
          />
        </Box.Footer>
      </>
    </Box>
  );
};

export default withErrorHandler(SinglePostView);
