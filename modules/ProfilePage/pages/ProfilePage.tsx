import React from 'react';
import type { FC, ReactElement } from 'react';
import { useAuth } from 'context/AuthUserContext/AuthUserContext';
import { capitalizeFirstLetterOfEveryWord } from '@modules/shared/logic/capitalizeFirstLetterOfEveryWord/capitalizeFirstLetterOfEveryWord';
import Head from 'next/head';
import ImgWithInfo from '@modules/shared/components/molecules/ImgWithInfo/ImgWithInfo';
import Tab from '@modules/shared/components/atoms/Tab/Tab';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import Posts from '@modules/HomePage/components/Posts/Posts';
import { tabGroupData } from '../../shared/components/molecules/TabGroup/data';
import Edit from '../../shared/components/icons/edit.svg';
import Box from '../../shared/components/atoms/Box/Box';
// import TabGroup from '@modules/shared/components/molecules/TabGroup/TabGroup';
// import styles from './ProfilePage.module.css';

const ProfilePage: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  const { user } = useAuth();
  const userName =
    user?.username && capitalizeFirstLetterOfEveryWord(user.username);
  const tabsData = tabGroupData();

  return (
    <>
      <Head>
        <title>{userName} | Pickify</title>
      </Head>
      <div className="relative">
        <Box classes="mb-6" isGreyColor>
          <Box.Body>
            <>
              <div className="">
                <ImgWithInfo
                  isHidden={false}
                  subTitle="Member since 2021"
                  title="Ahmed Ayoub"
                  profilePic={user?.userImg}
                  variant="avatar"
                  avatarSize="super-large"
                />
              </div>
              <div>
                <h6 className="absolute top-14 left-28 font-light text-sm ">
                  posts:123 followers:456 following:789
                </h6>
              </div>
              <div className="absolute top-6 right-6 cursor-pointer">
                <Edit />
              </div>
            </>
          </Box.Body>
        </Box>

        <div className="flex items-center">
          {tabsData.map((tab) => (
            <div
              className="mr-xs last:mr-0 border border-grey rounded-full"
              key={tab.id}
            >
              <Tab
                id={tab.id}
                svg={tab.svg}
                value={tab.postType}
                changeValHandler={(): boolean => true}
                checkedValue="just me now"
                onlyLabel
              />
            </div>
          ))}
        </div>

        <div>
          <Box classes="p-0">
            <Box.Body classes="p-0">
              <Posts data={data} />
            </Box.Body>
          </Box>
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
