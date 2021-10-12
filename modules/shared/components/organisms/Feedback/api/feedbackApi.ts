import axios from 'axios';
import { generateErrMsg } from '../../../../logic/generateErrMsg/generateErrMsg';
import { errorMessage } from './feedbackHelpers';
import type { IFeedback } from './IFeedbackApi';
import { POSTS_API } from '../../../../api/apiConfigs';

export const submitFeedback = async (
  feedbackBody: string,
  feedbackRating: number,
  token: string,
): Promise<void> => {
  try {
    await axios.post(
      `${POSTS_API}/feedbacks`,
      {
        feedback_body: feedbackBody,
        feedback_rating: feedbackRating,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error: unknown) {
    const { response } = error as IFeedback.IFeedbackResErrorData;
    const { message: errMessage } = error as { message: string };

    if (!response) {
      throw Object.assign(new Error(), {
        data: { error: true, message: errMessage },
      });
    }

    const { data } = response;
    const { message, status_code: statusCode } = data;

    const generatedMessage = generateErrMsg(errorMessage, statusCode, message);
    throw Object.assign(new Error(), {
      data: {
        error: true,
        message: generatedMessage,
        errorCode: statusCode,
      },
    });
  }
};
