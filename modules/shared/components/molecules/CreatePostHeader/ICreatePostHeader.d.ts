import type { ITabGroup } from '../TabGroup/ITabGroup';

declare namespace ICreatePostHeader {
  export interface IProps extends ITabGroup.IProps {
    profilePic?: string;
  }
}
export { ICreatePostHeader };
