declare namespace IDataTests {
  export interface IDataSucccess {
    data: {
      postTitle: string;
    };
  }
  export interface IDataError {
    data: {
      error: boolean;
      message: string;
      errorCode: number;
    };
  }
}

export { IDataTests };
