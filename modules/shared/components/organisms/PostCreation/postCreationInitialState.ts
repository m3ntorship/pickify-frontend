import { EPollType } from './types/EPollType';

const randomId = (): string => {
  const randomHelper = 10000000000;
  return `id_${Math.round(Math.random() * randomHelper)}`;
};

const postCreationInitialState = {
  miniSurvey: {
    postType: EPollType.MiniSurvey,
    postCaption: { id: randomId(), body: '' },
    groups: [
      {
        id: randomId(),
        name: '',
        options: [
          { id: randomId(), body: '', media: [] },
          { id: randomId(), body: '', media: [] },
        ],
        media: [],
      },
    ],
    media: [],
  },
  textPoll: {
    postType: EPollType.TextPoll,
    postCaption: { id: randomId(), body: '' },
    groups: [
      {
        id: randomId(),
        name: 'Group 0',
        options: [
          { id: randomId(), body: '', media: [] },
          { id: randomId(), body: '', media: [] },
        ],
        media: [],
      },
    ],
    media: [],
  },
  imagePoll: {
    postType: EPollType.ImagePoll,
    postCaption: { id: randomId(), body: '' },
    groups: [
      {
        id: randomId(),
        name: 'Group 0',
        options: [],
        media: [],
      },
    ],
    media: [],
  },
  user: {
    id: '',
    userName: '',
    profilePic: '',
  },

  currentSelectedTab: EPollType.ImagePoll,
  isHiddenIdentity: false,
  privacy: 'friends',
  createdAt: new Date().toISOString(),
  mediaCount: 0,
};
export default postCreationInitialState;
