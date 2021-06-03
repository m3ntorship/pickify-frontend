import React from 'react';
import type { FC, ReactElement } from 'react';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import Navigation from '@modules/shared/components/molecules/Navigation/Navigation';
import Widget from '@modules/shared/components/atoms/Widget/Widget';
import styles from './home-page.module.css';

interface WidgetData {
  content: string;
}

const HomePage: FC<IPostFeed.IPosts> = (): ReactElement => {
  const firstIndex = 0;
  const widgetData: WidgetData[] = [
    {
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

  return (
    <section className="bg-grey-bg2 min-h-screen">
      <Navigation />
      <section className={styles['layout-parent']}>
        <div className={styles['posts-feed']}>
          <div className={styles.widget}>
            <Widget>{widgetData[firstIndex].content}</Widget>
          </div>
        </div>
        <div className={styles.widgets}>
          {widgetData.map((widget) => (
            <div className={styles.widget}>
              <Widget>{widget.content}</Widget>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default HomePage;
