import type { ITabGroup } from '../TabGroup/ITabGroup';

declare namespace ICreatePostHeader {
  export interface IProps extends ITabGroup.IProps {
    profilePic?: string;
    onTabChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
}
export { ICreatePostHeader };
