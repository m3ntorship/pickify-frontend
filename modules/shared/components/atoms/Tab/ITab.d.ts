import type { IRadio } from '../Radio/IRadio';

declare namespace ITab {
  export interface IProps extends IData, IHandlers {
    disabled?: boolean;
    onlyLabel?: boolean;
  }

  export interface IData extends IRadio.IData {
    value: 'Image Poll' | 'Mini survey' | 'Text Poll';
    checkedValue: string;
    svg: JSX.Element;
  }

  export interface IHandlers {
    changeValHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
}
export { ITab };
