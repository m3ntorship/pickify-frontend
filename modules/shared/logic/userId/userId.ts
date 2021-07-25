const users: Record<string, string> = {
  'Ahmed Adel': '3ad4e0f5-1787-46fa-851f-d7dddbfaf2c3',
  'Ahmed Twfiek': '9a8f172b-9496-4726-b2ad-e42200168ee9',
  essam: '9e7ecc64-a563-4cbe-a69b-c99a569b41b9',
  omar: '9e12c68c-8079-4a3b-a327-20be3d2e5ae8',
  abdo: '6c1f812c-2fca-4c05-8cec-2a9eb56c35d0',
};

export const getUserToken = (name: string): string => {
  return users[name];
  // return document.cookie.split('=')[1];
};
