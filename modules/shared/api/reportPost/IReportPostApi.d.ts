declare namespace IReportPostApi {
  export interface IReportPostRes {
    resData: IReportPostErrorData | IReportPostSuccessData;
  }

  export interface IReportPostSuccessData {
    message: string;
  }
  export interface IReportPostErrorData {
    error: boolean;
    message: string;
    errorCode: number;
  }
  export interface IReportPostResErrorData {
    response?: { data: { message: string; status_code: number } };
  }
}

export { IReportPostApi };
