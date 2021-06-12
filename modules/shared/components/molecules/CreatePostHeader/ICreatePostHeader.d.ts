import type { ITabGroup } from '../TabGroup/ITabGroup';

declare namespace ICreatePostHeader {
  export interface IProps extends IHandlers {
    tabsData: ITabGroup.ITabGroupData[];
    checkedValue: string;
    profilePic?: string;
  }

  export interface IHandlers {
    onTabChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
}
export { ICreatePostHeader };
