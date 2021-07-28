declare module 'cookie-cutter' {
  export declare const get: (key: string) => string;
  export declare const set: (
    key: string,
    token: string,
    opts?: Record<string, unknown>,
  ) => void;
}
