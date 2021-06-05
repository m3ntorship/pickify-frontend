import withErrorHandler from '@modules/shared/components/HOC/WithErrorHandler/WithErrorHandler';
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
            return null;
          case 'image poll':
            return null;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default withErrorHandler(Posts);
