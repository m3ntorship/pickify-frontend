import { useEffect, useState, useRef } from 'react';
import type { IUseDetectClickOut } from './IUseDetectClickOut';

export const useDetectClickOut = (
  initState: boolean,
): IUseDetectClickOut.IDetextClickOut => {
  const [show, setShow] = useState(initState);
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent): void => {
    if (triggerRef.current?.contains(e.target as Node)) {
      setShow(!show);
      return;
    }

    if (!nodeRef.current?.contains(e.target as Node)) {
      setShow(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return (): void => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return {
    triggerRef,
    show,
    setShow,
    nodeRef,
  };
};
