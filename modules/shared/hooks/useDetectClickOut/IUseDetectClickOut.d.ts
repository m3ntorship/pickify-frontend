import type { MutableRefObject } from 'react';

declare namespace IUseDetectClickOut {
  export interface IDetextClickOut {
    triggerRef: MutableRefObject<HTMLDivElement | null>;
    show: boolean;
    setShow: (initState: boolean) => void;
    nodeRef: MutableRefObject<HTMLDivElement | null>;
  }
}

export { IUseDetectClickOut };
