declare namespace IPostsApi {
  export interface IPostsRes {
    resData: IPostsErrorData | IPostsSuccessData;
  }
  export interface IPostsSuccessData {
    message: string;
    error: boolean;
  }

  export interface IPostsErrorData {
    message: string;
    error: boolean;
  }
  export interface IErrorData {
    response?: { data: { message: string; status_code: number } };
  }
}

export { IPostsApi };
