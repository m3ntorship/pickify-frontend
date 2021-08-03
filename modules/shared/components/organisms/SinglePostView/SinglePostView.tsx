import withErrorHandler from '@modules/shared/components/HOC/WithErrorHandler/WithErrorHandler';
import {
  TextPollView,
  MiniSurveyView,
  ImagePollView,
} from '@modules/shared/components/organisms';
import { EPostType } from '@modules/shared/types/postFeed/EPostType';
import type { FC, ReactElement } from 'react';
import type { IPost } from './ISinglePostView';
import styles from './SinglePostView.module.css';

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
      console.log('Clipboard access is denied', err);
    }
  }
};

const SinglePostView: FC<IPost.Props> = ({
  post,
  deletePostHandler,
  addOneVoteHandler,
}): ReactElement => {
  return (
    <div className={styles.posts}>
      {post.type === EPostType.TextPoll && (
        <div key={post.id} className={styles.posts}>
          <TextPollView
            post={post}
            deletePostHandler={deletePostHandler}
            addOneVote={addOneVoteHandler}
            sharePostHandler={sharePostHandler}
          />
        </div>
      )}
      {post.type === EPostType.MiniSurvey && (
        <div key={post.id} className={styles.posts}>
          <MiniSurveyView
            post={post}
            deletePostHandler={deletePostHandler}
            addOneVote={addOneVoteHandler}
            sharePostHandler={sharePostHandler}
          />
        </div>
      )}
      {post.type === EPostType.ImagePoll && (
        <div key={post.id} className={styles.posts}>
          <ImagePollView
            post={post}
            deletePostHandler={deletePostHandler}
            addOneVote={addOneVoteHandler}
            sharePostHandler={sharePostHandler}
          />
        </div>
      )}
    </div>
  );
};

export default withErrorHandler(SinglePostView);
