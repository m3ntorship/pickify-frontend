export const getUserToken = (): string => {
  // return users[name];
  return document.cookie.split('=')[1];
};
