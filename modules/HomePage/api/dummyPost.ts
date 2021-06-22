import { PostCreationRequestTypeEnum } from '@m3ntorship/posts-client/dist/client';
import type { ITextPollCreation } from '../../shared/components/organisms/TextPollCreation/types/ITextPollCreation';

export const dummyPosts: ITextPollCreation.IState[] = [
  {
    privacy: 'Family',
    postCaption: { id: '1', value: 'caption 1' },
    hiddenIdentity: false,
    postType: PostCreationRequestTypeEnum.MiniSurvey,
    groups: [
      {
        name: 'Group 1',
        options: [
          {
            id: 'option-1',
            body: 'option 1',
          },
          {
            id: 'option-2',
            body: ' option 2',
          },
          {
            id: 'option-3',
            body: ' option 3',
          },
        ],
      },
      {
        name: 'Group 2',
        options: [
          {
            id: 'option-2',
            body: 'option 4',
          },
          {
            id: 'option-3',
            body: 'option 5',
          },
        ],
      },
    ],
  },
  {
    privacy: 'Family',
    postCaption: { id: '1', value: 'caption 1' },
    hiddenIdentity: false,
    postType: PostCreationRequestTypeEnum.MiniSurvey,
    groups: [
      {
        name: '',
        options: [],
      },
      {
        name: 'Group 2',
        options: [
          {
            id: 'option-2',
            body: '',
          },
        ],
      },
    ],
  },
];
