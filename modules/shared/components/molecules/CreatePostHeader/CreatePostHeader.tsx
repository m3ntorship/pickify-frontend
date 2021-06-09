import React from 'react';
import type { FC, ReactElement } from 'react';
import type { ICreatePostHeader } from './ICreatePostHeader';
import Avatar from '../../atoms/Avatar/Avatar';
import TabGroup from '../TabGroup/TabGroup';

const CreatePostHeader: FC<ICreatePostHeader.IProps> = (
  props,
): ReactElement => {
  const { tabsData, checkedValue, changeValHandler, profilePic } = props;

  const avatarVariant = profilePic ? 'filled' : 'notFilled';

  return (
    <div className="flex items-center">
      <div className="m-4">
        <Avatar variant={avatarVariant} profilePic={profilePic} size="medium" />
      </div>
      <div>
        <TabGroup
          changeValHandler={changeValHandler}
          checkedValue={checkedValue}
          tabsData={tabsData}
        />
      </div>
    </div>
  );
};

export default CreatePostHeader;
