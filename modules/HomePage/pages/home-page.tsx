import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import Widget from '@modules/shared/components/atoms/Widget/Widget';
import Button from '@modules/shared/components/atoms/Button/Button';
import styles from './home-page.module.css';
import Posts from '../components/Posts/Posts';
import NewPost from '../components/NewPost/NewPost';
import * as EButton from '../../shared/components/atoms/Button/types/EButton';

interface WidgetData {
  content: string;
  id: string;
}

const HomePage: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  const widgetData: WidgetData[] = [
    {
      id: '1',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: '2',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: '3',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  const handleScrollUp = (): void => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="min-h-screen relative">
      <section className={styles['layout-parent']}>
        <div className={styles['posts-feed']}>
          <NewPost />
          <Posts data={data} />
        </div>
        <div className={styles.widgets}>
          {widgetData.map((widget) => (
            <div className={styles.widget} key={widget.id}>
              <Widget>{widget.content}</Widget>
            </div>
          ))}
        </div>
        <div className="transform rotate-180 fixed bottom-5 right-7">
          <Button
            size={EButton.buttonSizeValues.MEDIUM}
            variant={EButton.buttonVariantValues.PRIMARY}
            onlyIcon
            onClick={handleScrollUp}
          />
        </div>
      </section>
    </section>
  );
};

export default HomePage;
