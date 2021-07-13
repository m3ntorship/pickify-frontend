import { postsApi } from '../../../shared/api/postsApi.api';
import type { IDeletePostsApi } from './IDeletePostsApi';
import { deletePost } from './deletePostsApi';

jest.mock('../../../shared/api/postsApi.api');

const mockPostsApi = postsApi as jest.Mocked<typeof postsApi>;

describe('delete Posts api', () => {
  it('assert the resolved state with the returned successfull respond data ', async () => {
    mockPostsApi.deleteOnePost.mockResolvedValue({
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
      message: 'Not Found',
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
      message: 'Unauthorized',
    };

    expect(resData).toEqual(rejectedData);
  });
});
