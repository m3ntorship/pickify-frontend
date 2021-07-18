import { EStatusCode } from '../../api/EStatusCode';
import { generateErrMsg } from './generateErrMsg';

export const errorMessage: Record<number, string> = {
  [EStatusCode.NotFound]: 'something went wrong',
  [EStatusCode.Unauthorized]: 'Unauthorized',
  [EStatusCode.BadRequest]: 'Bad request',
};

describe('generateErrMsg', () => {
  it('should return something went wrong even if we passed a custom msg as a third param when we pass 404 status code', () => {
    const generatedMsg = generateErrMsg(errorMessage, 404, 'wallla3');

    const expectedData = 'something went wrong';

    expect(generatedMsg).toEqual(expectedData);
  });

  it('should return the passed custom msg when we pass unknown status code', () => {
    const generatedMsg = generateErrMsg(
      errorMessage,
      500,
      'internal server error',
    );

    const expectedData = 'internal server error';

    expect(generatedMsg).toEqual(expectedData);
  });
});
