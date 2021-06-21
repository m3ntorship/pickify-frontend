export const setUser = (): void => {
  const userid = prompt('user id?');
  localStorage.setItem('user', String(userid));
};

export const getUser = (): string => {
  if (process.browser) {
    return localStorage.getItem('user') ?? '30';
  }
  return '30';
};
