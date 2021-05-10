declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg' {
  import type React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  > = null;
  const src: string;
  export default src;
}
