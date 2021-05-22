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
    <div className="flex w-min">
      <Avatar size={size} variant={variant} imgSrc={imgSrc} />
      <div className="flex-col ml-4 whitespace-nowrap">
        <span
          className="font-sans text-sm text-black font-medium block"
          data-testid="name"
        >
          {variant === 'anonymous' ? 'Anonymous' : name}
        </span>
        <span className="font-sans text-sm text-dark-grey block">
          {date} ago
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
