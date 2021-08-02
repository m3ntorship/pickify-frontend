declare namespace IAuth {
  export interface IAuthResData {
    resData: IAuthErrorData | IAuthSuccessData;
  }

  export interface IAuthSuccessData {
    error: boolean;
    uuid: string;
  }
  export interface IAuthErrorData {
    message: string;
    error: boolean;
    errorCode?: number;
  }

  export interface IErrorData {
    response?: { data: { message: string; status_code: number } };
  }
}

export { IAuth };
