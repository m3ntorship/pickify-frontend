import React, { useState } from 'react';
import type { FC, ReactElement, MouseEvent } from 'react';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import Navigation from '@modules/shared/components/molecules/Navigation/Navigation';
import Widget from '@modules/shared/components/atoms/Widget/Widget';
import PostCreation from '@modules/shared/components/organisms/PostCreation/PostCreation';
import Modal from '@modules/shared/components/organisms/Modal/Modal';
import TextInput from '@modules/shared/components/atoms/TextInputs/TextInput';
import * as ETextInput from '@modules/shared/components/atoms/TextInputs/types/ETextInput';
import Avatar from '@modules/shared/components/atoms/Avatar/Avatar';
import styles from './home-page.module.css';
import Posts from '../components/Posts';

interface WidgetData {
  content: string;
  id: string;
}

const HomePage: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  const [showModal, setShowModal] = useState(false);
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

  const showModalHandler = (): void => {
    setShowModal(true);
  };

  const closeModalHandler = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    setShowModal(false);
  };

  return (
    <section className="bg-grey-bg2 min-h-screen relative">
      <Navigation />
      <section className={styles['layout-parent']}>
        <div className={styles['posts-feed']}>
          <div className={styles['input-creation']}>
            <div className="flex">
              <div className="mr-4">
                <Avatar size="medium" variant="notFilled" />
              </div>
              <div className="relative flex w-full">
                <div
                  className="absolute h-full w-full z-10 cursor-pointer"
                  onClick={showModalHandler}
                  role="button"
                  aria-hidden
                />
                <TextInput
                  variants={ETextInput.Variants.Default}
                  inputType={ETextInput.InputType.Default}
                  id="id_1"
                  onChange={(): boolean => false}
                  value=""
                  placeholder="What do you want to ask about?"
                  onClick={(): boolean => false}
                />
              </div>
            </div>
          </div>
          {showModal && (
            <Modal closeModalHandler={closeModalHandler}>
              <PostCreation />
            </Modal>
          )}
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
