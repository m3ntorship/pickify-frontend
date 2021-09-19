import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import Head from 'next/head';
import ImgWithInfo from '@modules/shared/components/molecules/ImgWithInfo/ImgWithInfo';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import Posts from '@modules/HomePage/components/Posts/Posts';
import TabGroup from '@modules/shared/components/molecules/TabGroup/TabGroup';
import withErrorHandler from '@modules/shared/components/HOC/WithErrorHandler/WithErrorHandler';
import { profileTabGroupData } from '../../shared/components/molecules/TabGroup/data';
import Edit from '../../shared/components/icons/edit.svg';
import Box from '../../shared/components/atoms/Box/Box';
// import styles from './ProfilePage.module.css';

const ProfilePage: FC<{
  data: { posts: IPostFeed.IPost[]; postsCount: number; user: IPostFeed.IUser };
}> = ({ data }): ReactElement => {
  console.log(data.user);
  const [checkedValue, setCheckedValue] = useState('posts');

  const onTabGroupChangeValueHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setCheckedValue(e.target.value);
  };
  return (
    <>
      <Head>
        <title>{data.user.name} | Pickify</title>
      </Head>
      <div>
        <Box classes="mb-6 relative" isWhiteColor>
          <Box.Body>
            <>
              <ImgWithInfo isResponsive>
                <>
                  <ImgWithInfo.Image
                    ImageSize="super-large"
                    ImageVariant="avatar"
                    profilePic={data.user.profile_pic}
                  />
                  <ImgWithInfo.Info isResponsive>
                    <>
                      <ImgWithInfo.Info.Title titleSize="large">
                        {data.user.name}
                      </ImgWithInfo.Info.Title>
                      <ImgWithInfo.Info.SubTitle subTitleSize="medium">
                        Member since 2021
                      </ImgWithInfo.Info.SubTitle>
                      <ImgWithInfo.Info.MoreInfo classes="mt-2">
                        <ul className="flex list-none">
                          <li className="font-normal text-sm text-dark-grey mr-4">
                            posts: 123
                          </li>
                          <li className="font-normal text-sm text-dark-grey mr-4">
                            followers: 456
                          </li>
                          <li className="font-normal text-sm text-dark-grey">
                            following: 789
                          </li>
                        </ul>
                      </ImgWithInfo.Info.MoreInfo>
                    </>
                  </ImgWithInfo.Info>
                </>
              </ImgWithInfo>
              <Edit className="absolute top-7 right-6 cursor-pointer" />
            </>
          </Box.Body>
        </Box>
        <TabGroup
          tabsData={profileTabGroupData()}
          changeValHandler={onTabGroupChangeValueHandler}
          checkedValue={checkedValue}
          onlyLabel
        />
        <div className="mt-4">
          <Posts data={{ posts: data.posts, postsCount: data.postsCount }} />
        </div>
      </div>
    </>
  );
};
export default withErrorHandler(ProfilePage);
