import { postsApi } from '../../../shared/api/postsApi.api';
import type { IDeletePostsApi } from './IDeletePostsApi';
import { deletePost } from './deletePostsApi';

jest.mock('../../../shared/api/postsApi.api');

const mockPostsApi = postsApi as jest.Mocked<typeof postsApi>;

describe('delete Posts api', () => {
  it('assert the resolved state with the returned successfull respond data ', async () => {
    const mockPostDeletion = mockPostsApi.deleteOnePost.mockResolvedValue({
      data: undefined,
      status: 204,
      statusText: 'ok',
      headers: 'any',
      config: {},
    });

    const { resData } = await deletePost('1');

    const resolvedData: IDeletePostsApi.IDeletePostsSuccessData = {
      error: false,
      message: 'Post has been deleted successfully',
    };
    expect(mockPostDeletion).toHaveBeenCalledWith('1');
    expect(resData).toEqual(resolvedData);
  });

  it('assert the rejected state with message "Network Error" when there isnt a response from the library ', async () => {
    mockPostsApi.deleteOnePost.mockRejectedValue({ message: 'Network Error' });
    const { resData } = await deletePost('2');
    const rejectedData: IDeletePostsApi.IDeletePostsErrorData = {
      error: true,
      message: 'Network Error',
    };

    expect(resData).toEqual(rejectedData);
  });

  it('assert the rejected state with message "Not Found" when there is a status code of 404 and a response from the library ', async () => {
    mockPostsApi.deleteOnePost.mockRejectedValue({
      response: { data: { message: 'Not Found', status_code: 404 } },
    });
    const { resData } = await deletePost('3');
    const rejectedData: IDeletePostsApi.IDeletePostsErrorData = {
      error: true,
      message: 'something went wrong',
      errorCode: 404,
    };

    expect(resData).toEqual(rejectedData);
  });

  it('assert the rejected state with message "Unauthorized"" when there is a status code of 401 and a response from the library ', async () => {
    mockPostsApi.deleteOnePost.mockRejectedValue({
      response: { data: { message: 'Unauthorized', status_code: 401 } },
    });
    const { resData } = await deletePost('4');
    const rejectedData: IDeletePostsApi.IDeletePostsErrorData = {
      error: true,
      message: 'Please login first to interact with our app',
      errorCode: 401,
    };

    expect(resData).toEqual(rejectedData);
  });
});
