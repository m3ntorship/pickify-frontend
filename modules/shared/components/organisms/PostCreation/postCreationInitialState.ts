import { EPollType } from './types/EPollType';

const postCreationInitialState = {
  miniSurvey: {
    postType: EPollType.MiniSurvey,
    postCaption: { id: 'id_123181239001', body: '' },
    mediaCount: 0,
    groups: [
      {
        id: 'G0',
        name: '',
        options: [
          { id: 'O0', body: '', media: [] },
          { id: 'O1', body: '', media: [] },
        ],
        media: [],
      },
    ],
    media: [],
  },
  textPoll: {
    postType: EPollType.TextPoll,
    postCaption: { id: 'id_123181239002', body: '' },
    mediaCount: 0,
    groups: [
      {
        id: 'G0',
        name: '',
        options: [
          { id: 'O0', body: '', media: [] },
          { id: 'O1', body: '', media: [] },
        ],
        media: [],
      },
    ],
    media: [],
  },
  imagePoll: {
    postType: EPollType.ImagePoll,
    postCaption: { id: 'id_123181239003', body: '' },
    mediaCount: 0,
    groups: [
      {
        id: 'G0',
        name: '',
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
};
export default postCreationInitialState;
