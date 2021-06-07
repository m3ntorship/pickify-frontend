import withErrorHandler from '@modules/shared/components/HOC/WithErrorHandler/WithErrorHandler';
import ImagePollView from '@modules/shared/components/organisms/ImagePollView/ImagePollView';
import MiniSurveyView from '@modules/shared/components/organisms/MiniSurveyView/MiniSurveyView';
import TextPollView from '@modules/shared/components/organisms/TextPollView/TextPollView';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import type { FC, ReactElement } from 'react';
import styles from '../pages/home-page.module.css';

const Posts: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  return (
    <div className={styles.posts}>
      {data.posts.map((post) => {
        switch (post.type) {
          case 'text poll':
            return (
              <div key={post.id} className={styles.posts}>
                <TextPollView post={post} />
              </div>
            );
          case 'mini_survey':
            return (
              <div key={post.id} className={styles.posts}>
                <MiniSurveyView post={post} />
              </div>
            );
          case 'image poll':
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
