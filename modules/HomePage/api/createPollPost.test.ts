import { createPollPost } from './createPollPost';
import { dummyPosts } from './dummyPost';

describe('createPollPost', () => {
  it('should return success data when we pass valid post', async () => {
    const firstPost = 0;

    const successData = {
      error: false,
      message: 'post created successfully',
      errorCode: 201,
    };

    expect(await createPollPost(dummyPosts[firstPost])).toEqual(successData);
  });

  it('should return error data when we pass invalid post', async () => {
    const secondPost = 1;

    const errorData = {
      error: true,
      message: 'Request failed with status code 400',
      errorCode: 404,
    };

    expect(await createPollPost(dummyPosts[secondPost])).toEqual(errorData);
  });

  it('createPost should returns an id', () => {
    const firstCall = 0;
    const createPost = jest.fn((): { data: { id: string } } => ({
      data: { id: '1' },
    }));

    createPost();

    expect(createPost.mock.results[firstCall].value).toEqual({
      data: { id: '1' },
    });
  });

  it('createOptionsGroup should return true of we passed a valid id and false if not', () => {
    const firstCall = 0;
    const createOptionsGroup = jest.fn((id: string): boolean => !!id);

    createOptionsGroup('1');

    expect(createOptionsGroup.mock.results[firstCall].value).toEqual(true);
  });
});
