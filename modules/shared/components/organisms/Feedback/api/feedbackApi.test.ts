import axios from 'axios';
import { submitFeedback } from './feedbackApi';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('reportPost', () => {
  it("Should reject Network Error if there's not a response cames from the server", async () => {
    mockedAxios.post.mockRejectedValue({ message: 'Network Error' });

    try {
      await submitFeedback('0', 3, '0');
    } catch (error: unknown) {
      const expectedData = {
        data: { error: true, message: 'Network Error' },
      };

      expect(JSON.stringify(error)).toEqual(JSON.stringify(expectedData));
    }
  });

  it('Should reject Error object with custom message if client did recognized the status code', async () => {
    mockedAxios.post.mockRejectedValue(
      Object.assign(new Error(), {
        response: { data: { status_code: 401, message: 'unauthorized' } },
      }),
    );

    try {
      await submitFeedback('0', 3, '0');
    } catch (error: unknown) {
      const expectedData = {
        data: {
          error: true,
          message: 'Please login first to interact with our app.',
          errorCode: 401,
        },
      };

      expect(JSON.stringify(error)).toEqual(JSON.stringify(expectedData));
    }
  });

  it('Should reject Error object and return same message if client did not recognized the status code', async () => {
    mockedAxios.post.mockRejectedValue(
      Object.assign(new Error(), {
        response: { data: { status_code: 15, message: 'error message' } },
      }),
    );

    try {
      await submitFeedback('0', 3, '0');
    } catch (error: unknown) {
      const expectedData = {
        data: { error: true, message: 'error message', errorCode: 15 },
      };

      expect(JSON.stringify(error)).toEqual(JSON.stringify(expectedData));
    }
  });
});
