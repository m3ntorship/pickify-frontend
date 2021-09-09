import React from 'react';
import type { Story, Meta } from '@storybook/react';
import ImgWithInfo from './ImgWithInfo';
import TextPoll from '../../icons/textPoll.svg';
import type { IImgWithInfo } from './IImgWithInfo';

export default {
  title: 'Molecules/ImgWithInfo',
  component: ImgWithInfo,
} as Meta;

const Template: Story<IImgWithInfo.IProps> = () => (
  <div className="h-screen flex flex-col justify-between">
    <div>
      <h2 className="mb-6">small image with info with avatar</h2>
      <ImgWithInfo>
        <>
          <ImgWithInfo.Image
            ImageVariant="avatar"
            ImageSize="medium"
            profilePic="https://placeimg.com/640/480/any"
          />
          <ImgWithInfo.Info>
            <>
              <ImgWithInfo.Info.Title titleSize="small">
                Ahmed Ayoub
              </ImgWithInfo.Info.Title>
              <ImgWithInfo.Info.SubTitle subTitleSize="small">
                Member since 2021
              </ImgWithInfo.Info.SubTitle>
            </>
          </ImgWithInfo.Info>
        </>
      </ImgWithInfo>
    </div>

    <div>
      <h2 className="mb-6">small image with info with icon</h2>
      <ImgWithInfo>
        <>
          <ImgWithInfo.Image ImageVariant="icon" ImageSize="medium">
            <div className="bg-grey-shd7 flex justify-center items-center w-full h-full rounded-sm">
              <TextPoll />
            </div>
          </ImgWithInfo.Image>
          <ImgWithInfo.Info>
            <>
              <ImgWithInfo.Info.Title titleSize="small">
                Ahmed Ayoub
              </ImgWithInfo.Info.Title>
              <ImgWithInfo.Info.SubTitle subTitleSize="small">
                Member since 2021
              </ImgWithInfo.Info.SubTitle>
            </>
          </ImgWithInfo.Info>
        </>
      </ImgWithInfo>
    </div>

    <div>
      <h2 className="mb-6">small image with info with Anonymous title</h2>
      <ImgWithInfo>
        <>
          <ImgWithInfo.Image
            ImageVariant="avatar"
            ImageSize="medium"
            profilePic="https://placeimg.com/640/480/any"
          />
          <ImgWithInfo.Info>
            <>
              <ImgWithInfo.Info.Title titleSize="small" />
              <ImgWithInfo.Info.SubTitle subTitleSize="small">
                Member since 2021
              </ImgWithInfo.Info.SubTitle>
            </>
          </ImgWithInfo.Info>
        </>
      </ImgWithInfo>
    </div>

    <div>
      <h2 className="mb-6">
        medium image with info with title and sub title and more info
      </h2>
      <ImgWithInfo isResponsive>
        <>
          <ImgWithInfo.Image
            ImageVariant="avatar"
            ImageSize="super-large"
            profilePic="https://placeimg.com/640/480/any"
            isResponsive
          />
          <ImgWithInfo.Info isResponsive>
            <>
              <ImgWithInfo.Info.Title titleSize="large">
                Ahmed Ayoub
              </ImgWithInfo.Info.Title>
              <ImgWithInfo.Info.SubTitle subTitleSize="medium">
                Member since 2021
              </ImgWithInfo.Info.SubTitle>
              <ImgWithInfo.Info.MoreInfo>
                <>
                  <ul className="list-none flex flex-wrap justify-center">
                    <li className="font-normal text-dark-grey text-sm mr-4">
                      Posts: 454
                    </li>
                    <li className="font-normal text-dark-grey text-sm mr-4">
                      Followers: 24k
                    </li>
                    <li className="font-normal text-dark-grey text-sm">
                      Following: 130
                    </li>
                  </ul>
                </>
              </ImgWithInfo.Info.MoreInfo>
            </>
          </ImgWithInfo.Info>
        </>
      </ImgWithInfo>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
