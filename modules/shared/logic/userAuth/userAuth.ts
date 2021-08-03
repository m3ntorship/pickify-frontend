import cookieCutter from 'cookie-cutter';

export const getUserToken = (): string => cookieCutter.get('user');
export const setUserToken = (token: string): void => {
  cookieCutter.set('user', token, { path: '/' });
};

export const clearUserToken = (): void => {
  cookieCutter.set('user', '', { expires: new Date(0) });
};

export const getUserUUID = (): string => cookieCutter.get('uuid');
export const setUserUUID = (UUID: string): void => {
  cookieCutter.set('uuid', UUID, { path: '/' });
};
export const clearUserUUID = (): void => {
  cookieCutter.set('uuid', '', { expires: new Date(0) });
};

export const getLastPage = (): string => cookieCutter.get('lastPage');
export const clearLastPage = (): void => {
  cookieCutter.set('lastPage', '', { expires: new Date(0) });
};
