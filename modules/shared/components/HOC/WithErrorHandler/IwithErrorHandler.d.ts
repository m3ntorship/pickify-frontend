declare namespace IWithErrorHandler {
  export interface IProps {
    data: {
      error: boolean;
      message: string;
      errorCode: number;
    };
  }
}

export { IWithErrorHandler };
