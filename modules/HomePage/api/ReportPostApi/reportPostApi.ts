import type { IReportPostApi } from './IReportPostApi';
import { errorMessage } from './reportPostHelpers';
import { generateErrMsg } from '../../../shared/logic/generateErrMsg/generateErrMsg';

export const reportPost = async (
  postId: string,
): Promise<IReportPostApi.IReportPostRes> => {
  try {
    // TEMPORARY MOCKING
    await Promise.resolve(postId);
    return {
      resData: { error: false, message: 'Post has been deleted successfully' },
    };
  } catch (err: unknown) {
    const { response } = err as IReportPostApi.IReportPostResErrorData;
    const { message: errMessage } = err as { message: string };
    if (!response) return { resData: { error: true, message: errMessage } };
    const { message, status_code } = response.data;
    const generatedMessage = generateErrMsg(errorMessage, status_code, message);
    return {
      resData: {
        error: true,
        message: generatedMessage,
        errorCode: status_code,
      },
    };
  }
};
