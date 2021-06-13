import React from 'react';
import type { FC, ReactElement } from 'react';
import type { ICreatePostHeader } from './ICreatePostHeader';
import Avatar from '../../atoms/Avatar/Avatar';
import TabGroup from '../TabGroup/TabGroup';

const CreatePostHeader: FC<ICreatePostHeader.IProps> = ({
  tabsData,
  checkedValue,
  onTabChangeHandler,
  profilePic,
}): ReactElement => {
  const avatarVariant: 'filled' | 'notFilled' = profilePic
    ? 'filled'
    : 'notFilled';

  return (
    <div className="flex items-center mb-4">
      <div className="mr-4">
        <Avatar variant={avatarVariant} profilePic={profilePic} size="medium" />
      </div>
      <div>
        <TabGroup
          changeValHandler={onTabChangeHandler}
          checkedValue={checkedValue}
          tabsData={tabsData}
        />
      </div>
    </div>
  );
};

export default CreatePostHeader;
