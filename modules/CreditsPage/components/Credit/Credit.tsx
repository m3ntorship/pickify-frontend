import React from 'react';
import type { FC, ReactElement } from 'react';
import Link from 'next/link';
import type { ICredit } from './ICredit';
import GithubIcon from '../../../shared/components/icons/github.svg';
import LinkedinIcon from '../../../shared/components/icons/linkedin.svg';
import DeticatedRank from '../../../shared/components/icons/deticatedRank.svg';
import Box from '../../../shared/components/atoms/Box/Box';
import ImgWithInfo from '../../../shared/components/molecules/ImgWithInfo/ImgWithInfo';

const Credit: FC<{ creditData: ICredit.ICreditData }> = ({
  creditData,
}): ReactElement => (
  <Box isWhiteColor classes="max-w-29xl">
    <>
      <Box.Header>
        <>
          <ImgWithInfo>
            <>
              <ImgWithInfo.Image
                ImageSize="super-large"
                ImageVariant="avatar"
                profilePic={creditData.developerImage}
              />
              <ImgWithInfo.Info classes="h-full">
                <>
                  <ImgWithInfo.Info.Title titleSize="medium">
                    {creditData.developerName}
                  </ImgWithInfo.Info.Title>
                  <ImgWithInfo.Info.SubTitle subTitleSize="small">
                    {creditData.developerTitle}
                  </ImgWithInfo.Info.SubTitle>
                  <ImgWithInfo.Info.MoreInfo>
                    <ul className="list-none flex">
                      {creditData.githubAccount && (
                        <li className="mr-1">
                          <Link href={creditData.githubAccount}>
                            <a>
                              <GithubIcon />
                            </a>
                          </Link>
                        </li>
                      )}
                      <li>
                        <Link href={creditData.linkedinAccount}>
                          <a>
                            <LinkedinIcon />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </ImgWithInfo.Info.MoreInfo>
                </>
              </ImgWithInfo.Info>
            </>
          </ImgWithInfo>
          <div className="flex flex-col items-center">
            <DeticatedRank className="mb-2" />
            <span className="text-xs font-light text-dark">
              {creditData.developerRank}
            </span>
          </div>
        </>
      </Box.Header>
      <Box.Footer withDevider>
        <div className="bg-grey-bg p-3">
          <p className="text-sm font-normal text-dark-grey">
            {creditData.feedback}
          </p>
        </div>
      </Box.Footer>
    </>
  </Box>
);

export default Credit;
