import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import CreatePostHeader from '../../molecules/CreatePostHeader/CreatePostHeader';
import { tabGroupData } from '../../molecules/TabGroup/data';
import TextPollCreation from '../TextPollCreation/TextPollCreation';

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
    </div>
  );
};
export default PostCreation;
