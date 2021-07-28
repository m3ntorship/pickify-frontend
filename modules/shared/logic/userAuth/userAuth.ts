import cookieCutter from 'cookie-cutter';

export const getUserToken = (): string => cookieCutter.get('user');
export const setUserToken = (token: string): void => {
  cookieCutter.set('user', token);
};
export const clearUserToken = (): void => {
  cookieCutter.set('user', '', { expires: new Date(0) });
};

export const getUserUUID = (): string => cookieCutter.get('uuid');
export const setUserUUID = (UUID: string): void => {
  cookieCutter.set('uuid', UUID);
};
export const clearUserUUID = (): void => {
  cookieCutter.set('uuid', '', { expires: new Date(0) });
};
