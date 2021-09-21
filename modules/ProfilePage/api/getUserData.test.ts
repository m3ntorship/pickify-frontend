import axios from 'axios';
import { getUserData } from './getUserData';
import { userData } from './userData';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getUserData', () => {
  it('should return success data with object of user data', async () => {
    const resolvedData = userData;

    mockedAxios.get.mockResolvedValue({
      data: resolvedData,
      status: 200,
      statusText: 'ok',
      headers: 'any',
      config: {},
    });

    const { data } = await getUserData('0', '000', 0);

    const successData = data;

    expect(data).toEqual(successData);
  });

  it('Should reject unauthorized error', async () => {
    mockedAxios.get.mockRejectedValue({});
    await expect(getUserData).rejects.toThrowError(Error);
  });
});
