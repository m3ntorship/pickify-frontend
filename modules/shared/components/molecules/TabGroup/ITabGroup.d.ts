import type { EPostType } from '../../../types/postFeed/EPostType';
import type { ITab } from '../../atoms/Tab/ITab';

declare namespace ITabGroup {
  export interface IProps extends IData, ITab.IHandlers {
    checkedValue: string;
    onlyLabel?: boolean;
  }

  export interface IData {
    tabsData: ITabGroupData[];
  }

  export interface ITabGroupData {
    id: string;
    svg: JSX.Element;
    value: 'Image Poll' | 'Mini Survey' | 'Text Poll';
    postType: EPostType;
  }
}
export { ITabGroup };
