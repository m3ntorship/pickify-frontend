import React, { useEffect } from 'react';
import type { FC, ReactElement } from 'react';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import Navigation from '@modules/shared/components/molecules/Navigation/Navigation';
import Widget from '@modules/shared/components/atoms/Widget/Widget';
import { useRouter } from 'next/router';
import styles from './home-page.module.css';
import Posts from '../components/Posts/Posts';
import NewPost from '../components/NewPost/NewPost';

interface WidgetData {
  content: string;
  id: string;
}

const HomePage: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  const router = useRouter();
  useEffect(() => {
    if (document.cookie.split('=')[0] !== 'user') {
      router
        .push('/login')
        .then()
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
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

  return (
    <section className="bg-grey-bg2 min-h-screen relative">
      <Navigation />
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
      </section>
    </section>
  );
};

export default HomePage;
