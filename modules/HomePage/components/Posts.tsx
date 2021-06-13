import withErrorHandler from '@modules/shared/components/HOC/WithErrorHandler/WithErrorHandler';
// import MiniSurveyCreationBody from '@modules/shared/components/molecules/MiniSurveyCreationBody/MiniSurveyCreationBody';
import MiniSurveyView from '@modules/shared/components/organisms/MiniSurveyView/MiniSurveyView';
// import TextPollCreation from '@modules/shared/components/organisms/TextPollCreation/TextPollCreation';
import TextPollView from '@modules/shared/components/organisms/TextPollView/TextPollView';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import type { FC, ReactElement } from 'react';
import styles from '../pages/home-page.module.css';

const Posts: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  return (
    <div className={styles.posts}>
      {/* <TextPollCreation /> */}
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
            return null;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default withErrorHandler(Posts);
