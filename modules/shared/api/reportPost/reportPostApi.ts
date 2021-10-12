import axios from 'axios';
import type { IReportPostApi } from './IReportPostApi';
import { errorMessage } from './reportPostHelpers';
import { generateErrMsg } from '../../logic/generateErrMsg/generateErrMsg';
import { POSTS_API } from '../apiConfigs';

export const reportPost = async (
  postId: string,
  token: string,
): Promise<IReportPostApi.IReportPostRes> => {
  try {
    await axios.post(
      `${POSTS_API}/reports`,
      { report_type: 'post', post_id: postId },
      { headers: { Authorization: `Bearer ${token}` } },
    );

    return { resData: { message: 'Post has been reported successfully' } };
  } catch (err: unknown) {
    const { response } = err as IReportPostApi.IReportPostResErrorData;
    const { message: errMessage } = err as { message: string };

    if (!response) {
      throw Object.assign(new Error(), {
        resData: { error: true, message: errMessage },
      });
    }

    const { message, status_code } = response.data;
    const generatedMessage = generateErrMsg(errorMessage, status_code, message);

    throw Object.assign(new Error(), {
      resData: {
        error: true,
        message: generatedMessage,
        errorCode: status_code,
      },
    });
  }
};
