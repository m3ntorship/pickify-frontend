export interface IFriendSuggestion {
  id: number;
  profilePic: string;
  username: string;
  mutualFriends: number;
}

export const dummyData: IFriendSuggestion[] = [
  {
    id: 0,
    profilePic: '/Ayoub.jpeg',
    username: 'Ahmed Ayoub',
    mutualFriends: 1,
  },
  {
    id: 1,
    profilePic: '/Elhaw.jpeg',
    username: 'Abdulrahman Elhaw',
    mutualFriends: 12,
  },
  {
    id: 2,
    profilePic: '/Adel.jpg',
    username: 'Ahmed Adel',
    mutualFriends: 12,
  },
  {
    id: 3,
    profilePic: '/Twfiek.jpeg',
    username: 'Ahmed Twfiek',
    mutualFriends: 1,
  },
  {
    id: 4,
    profilePic: '/Omar.jpg',
    username: 'Omar Awad',
    mutualFriends: 12,
  },
  {
    id: 5,
    profilePic: '/Sayad.jpg',
    username: 'Ahmed Elsayad',
    mutualFriends: 12,
  },
  {
    id: 6,
    profilePic: '/Essam.jpeg',
    username: 'Ahmed Essam',
    mutualFriends: 12,
  },
];
