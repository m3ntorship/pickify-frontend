import withErrorHandler from '@modules/shared/components/HOC/WithErrorHandler/WithErrorHandler';
import {
  TextPollView,
  MiniSurveyView,
  ImagePollView,
} from '@modules/shared/components/organisms';
import { EPostType } from '@modules/shared/types/postFeed/EPostType';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import type { FC, ReactElement } from 'react';
import styles from '../pages/home-page.module.css';

const Posts: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  return (
    <div className={styles.posts}>
      {data.posts.map((post) => {
        switch (post.type) {
          case EPostType.TextPoll:
            return (
              <div key={post.id} className={styles.posts}>
                <TextPollView post={post} />
              </div>
            );
          case EPostType.MiniSurvey:
            return (
              <div key={post.id} className={styles.posts}>
                <MiniSurveyView post={post} />
              </div>
            );
          case EPostType.ImagePoll:
            return (
              <div key={post.id} className={styles.posts}>
                <ImagePollView post={post} />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default withErrorHandler(Posts);
