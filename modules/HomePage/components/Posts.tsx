import faker from 'faker';
import withErrorHandler from '@modules/shared/components/HOC/WithErrorHandler/WithErrorHandler';
import {
  TextPollView,
  MiniSurveyView,
  ImagePollView,
} from '@modules/shared/components/organisms';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import type { FC, ReactElement } from 'react';
import styles from '../pages/home-page.module.css';

const Posts: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  return (
    <div className={styles.posts}>
      {data.posts.map((post) => {
        switch (post.type) {
          case 'Text Poll':
            return (
              <div key={post.id} className={styles.posts}>
                <TextPollView
                  post={{
                    ...post,
                    user: {
                      id: 'ahmed',
                      name: 'ayoub',
                      profile_pic: faker.image.avatar(),
                    },
                  }}
                />
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
