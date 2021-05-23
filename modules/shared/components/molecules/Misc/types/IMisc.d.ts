import type * as EMisc from './EMisc';

declare namespace IMisc {
  export interface IProps {
    type: EMisc.MiscType;
    msg: string;
    subMsg: string;
  }
}
export { IMisc };
