import React from 'react';
import type { ReactElement, FC } from 'react';
import type { IUserInfo } from './IUserInfo';
import Avatar from '../../atoms/avatar/Avatar';

const UserInfo: FC<IUserInfo.IProps> = ({
  size,
  variant,
  imgSrc,
  name,
  date,
}): ReactElement => {
  return (
    <div className="flex items-center justify-start h-10">
      <Avatar size={size} variant={variant} imgSrc={imgSrc} />
      <div className="flex-col ml-4">
        <span
          className="h-5 w-48 font-sans text-sm text-black font-bold block"
          data-testid="name"
        >
          {variant === 'anonymous' ? 'Anonymous' : name}
        </span>
        <span className="h-5 w-28 font-sans text-sm text-dark-grey block">
          {date} ago
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
