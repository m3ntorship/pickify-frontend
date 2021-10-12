declare namespace IDeletePostsApi {
  export interface IDeletePostsRes {
    resData: IDeletePostsErrorData | IDeletePostsSuccessData;
  }
  export interface IDeletePostsSuccessData {
    message: string;
    error: boolean;
  }

  export interface IDeletePostsErrorData {
    message: string;
    error: boolean;
    errorCode?: number;
  }
  export interface IDeletePostsResErrorData {
    response?: { data: { message: string; status_code: number } };
  }
}

export { IDeletePostsApi };
