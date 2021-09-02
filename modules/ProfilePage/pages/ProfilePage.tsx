import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import { useAuth } from 'context/AuthUserContext/AuthUserContext';
import { capitalizeFirstLetterOfEveryWord } from '@modules/shared/logic/capitalizeFirstLetterOfEveryWord/capitalizeFirstLetterOfEveryWord';
import Head from 'next/head';
import ImgWithInfo from '@modules/shared/components/molecules/ImgWithInfo/ImgWithInfo';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import Posts from '@modules/HomePage/components/Posts/Posts';
import TabGroup from '@modules/shared/components/molecules/TabGroup/TabGroup';
import { profileTabGroupData } from '../../shared/components/molecules/TabGroup/data';
import Edit from '../../shared/components/icons/edit.svg';
import Box from '../../shared/components/atoms/Box/Box';
import styles from './ProfilePage.module.css';

const ProfilePage: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  const { user } = useAuth();
  const userName =
    user?.username && capitalizeFirstLetterOfEveryWord(user.username);
  const [checkedValue, setCheckedValue] = useState('posts');

  const onTabGroupChangeValueHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setCheckedValue(e.target.value);
  };
  return (
    <>
      <Head>
        <title>{userName} | Pickify</title>
      </Head>
      <div className="relative">
        <Box classes="mb-6" isGreyColor>
          <Box.Body>
            <>
              <>
                <ImgWithInfo classes={styles['img-with-info']}>
                  <ImgWithInfo.Image
                    avatarSize="super-large"
                    variant="filled"
                    isHidden={false}
                    ImageVariant="avatar"
                    profilePic={user?.userImg}
                  />
                  <ImgWithInfo.Info classes={styles['img-with-info-info']}>
                    <h1 className={styles['user-name']}>{user?.username}</h1>
                    <p className={styles.title}>Member since 2021</p>
                    <div className="flex flex-row mt-2 justify-center items-center">
                      <h6 className={styles['sub-title']}>posts: 123</h6>
                      <h6 className={styles['sub-title']}>followers: 456</h6>
                      <h6 className={styles['sub-title']}>following: 789</h6>
                    </div>
                  </ImgWithInfo.Info>
                </ImgWithInfo>
              </>
              <div />
              <div className={styles['edit-icon']}>
                <Edit />
              </div>
            </>
          </Box.Body>
        </Box>

        <div className="flex items-center my-1">
          <TabGroup
            tabsData={profileTabGroupData()}
            changeValHandler={onTabGroupChangeValueHandler}
            checkedValue={checkedValue}
            onlyLabel
          />
        </div>

        <div className="mt-4">
          <Posts data={data} />
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
