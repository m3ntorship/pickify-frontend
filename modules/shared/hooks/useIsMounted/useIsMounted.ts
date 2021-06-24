import { useEffect, useRef } from 'react';

export const useIsMounted = (): React.MutableRefObject<boolean> => {
  const isMounted: React.MutableRefObject<boolean> = useRef<boolean>(true);

  useEffect(() => {
    return (): void => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};
