import type * as EMessageBoxType from './EMessageBox';

declare namespace IMessageBoxType {
  export interface IProps {
    type: EMessageBoxType.MessageBoxType;
    msg: string;
    subMsg: string;
  }
}
export { IMessageBoxType };
