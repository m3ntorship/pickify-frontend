export const getUser = (): string | null => {
  // if (process.browser) {
  // }
  return localStorage.getItem('user');
  // return null;
};
