import React from 'react';
import * as renderer from 'react-test-renderer';
import type { IPostFeed } from '../../../types/postFeed/IPostFeed';
import MiniSurveyView from './MiniSurveyView';

jest.mock('../../../logic/formatDate/getNow');

describe('ITextPollView', () => {
  const mockedPost: IPostFeed.IPost = {
    caption: 'nalyzing Delaware Frozen',
    id: '03644270-7171-4147-b5a1-4233ff547f7ddda',
    created_at: '2020-12-31T00:00:00.000Z',
    user: {
      name: 'Ahmed Ayoub',
      id: '465456',
      profile_pic:
        'https://i.pinimg.com/736x/10/61/c8/1061c85ea0dfd3a6655b4b3b6e71ade9.jpg',
    },
    type: 'text poll',
    is_hidden: false,
    media: [{ url: 'http://placeimg.com/640/480/nature?t=1622888620897' }],
    options_groups: {
      groups: [
        {
          id: '03644270-7171-4147-b5a1-4233ff547f7a',
          name: 'Group Name',
          options: [
            {
              id: 'eeb0a32a-1a3c-4c7f-9e50-dd3d3f70b53d',
              body: 'ali tramsy',
              media: [{ url: 'https://placeimg.com/640/480/any' }],
            },
            {
              id: 'eeb0a32a-1a3c-4c7f-9e50-dd3d3f70b5aa',
              body: ' ahmed essam',
              media: [{ url: 'https://placeimg.com/640/480/any' }],
            },
            {
              id: 'eeb0a32a-1a3c-4c7f-9e50-dd3d3f70b53c',
              body: ' omar gamal',
              media: [{ url: 'https://placeimg.com/640/480/any' }],
            },
          ],
        },
      ],
    },
  };
  it('should render ITextPollView Compnent with the mocked data', () => {
    const tree = renderer.create(<MiniSurveyView post={mockedPost} />);
    expect(tree).toMatchSnapshot();
  });
});
