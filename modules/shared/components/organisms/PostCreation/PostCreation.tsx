import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import CreatePostHeader from '../../molecules/CreatePostHeader/CreatePostHeader';
import { tabGroupData } from '../../molecules/TabGroup/data';
import TextPollCreation from '../TextPollCreation/TextPollCreation';
import CreateImagePoll from '../CreateImagePoll/CreateImagePoll';
import MiniSurveyPollCreation from '../MiniSurveyPollCreation/MiniSurveyPollCreation';

const PostCreation: FC = (): ReactElement => {
  const [checkedValue, setCheckedValue] = useState('Text Poll');

  const handleChangeTabsValue = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setCheckedValue(e.target.value);
  };
  return (
    <div className="bg-white shadow-soft m-2 p-m rounded-md">
      <CreatePostHeader
        profilePic=""
        checkedValue={checkedValue}
        tabsData={tabGroupData()}
        onTabChangeHandler={handleChangeTabsValue}
      />

      {checkedValue === 'Text Poll' && <TextPollCreation />}
      {checkedValue === 'Image Poll' && <CreateImagePoll />}
      {checkedValue === 'Mini survey' && <MiniSurveyPollCreation />}
    </div>
  );
};
export default PostCreation;
