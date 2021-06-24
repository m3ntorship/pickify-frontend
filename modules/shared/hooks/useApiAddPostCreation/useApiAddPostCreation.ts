import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import { useState } from 'react';
import type { IMiniSurveyPollCreation } from '../../components/organisms/MiniSurveyPollCreation/IMiniSurveyPollCreation';
import type { ITextPollCreation } from '../../components/organisms/TextPollCreation/types/ITextPollCreation';
import type { IGetPosts } from '../../api/IGetPosts';
import type { IUseApiAddPostCreation } from './IUseApiAddPostCreation';

export const useApiAddPostCreation = (
  postData: ITextPollCreation.IState,
  createPollPost: (
    state: IMiniSurveyPollCreation.IState | ITextPollCreation.IState,
  ) => Promise<IGetPosts.IErrorData>,
): IUseApiAddPostCreation.IApiAddPostCreation => {
  const [errorData, setErrorData] = useState<IGetPosts.IErrorData>({
    error: false,
    message: '',
    errorCode: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const refreshData = (): void => {
    router.replace(router.asPath) as Promise<NextRouter>;
  };

  const apiPostCreation = async (): Promise<void> => {
    setLoading(true);
    const data: IGetPosts.IErrorData = await createPollPost(postData);
    setLoading(false);
    setErrorData({
      error: data.error,
      message: data.message,
      errorCode: data.errorCode,
    });
    refreshData();
  };

  return { loading, errorData, apiPostCreation };
};
