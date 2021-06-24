export const setUser = (): void => {
  const userid = prompt('user id?');
  localStorage.setItem('user', String(userid));
};

export const getUser = (): string => {
  if (process.browser) {
    return (
      localStorage.getItem('user') ?? '3ad4e0f5-1787-46fa-851f-d7dddbfaf2c3'
    );
  }
  return '3ad4e0f5-1787-46fa-851f-d7dddbfaf2c3';
};
