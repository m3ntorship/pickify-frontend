import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import { PostCreationRequestTypeEnum } from '@m3ntorship/posts-client/dist/client';
import CreatePostHeader from '../../molecules/CreatePostHeader/CreatePostHeader';
import { tabGroupData } from '../../molecules/TabGroup/data';
import TextPollCreation from '../TextPollCreation/TextPollCreation';
import CreateImagePoll from '../CreateImagePoll/CreateImagePoll';
import MiniSurveyPollCreation from '../MiniSurveyPollCreation/MiniSurveyPollCreation';
import type { IPostCreation } from './IPostCreation';

const PostCreation: FC<IPostCreation.IProps> = ({
  createTextPollPost,
  createMiniSurveyPollPost,
}): ReactElement => {
  const [checkedValue, setCheckedValue] = useState<string>('text poll');

  const handleChangeTabsValue = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setCheckedValue(e.target.value);
  };
  return (
    <div className="bg-white shadow-soft mb-6 p-m rounded-md">
      <CreatePostHeader
        profilePic=""
        checkedValue={checkedValue}
        tabsData={tabGroupData()}
        onTabChangeHandler={handleChangeTabsValue}
      />

      {checkedValue === PostCreationRequestTypeEnum.TextPoll && (
        <TextPollCreation createTextPollPost={createTextPollPost} />
      )}
      {checkedValue === PostCreationRequestTypeEnum.ImagePoll && (
        <CreateImagePoll />
      )}
      {checkedValue === PostCreationRequestTypeEnum.MiniSurvey && (
        <MiniSurveyPollCreation
          createMiniSurveyPollPost={createMiniSurveyPollPost}
        />
      )}
    </div>
  );
};
export default PostCreation;
