declare namespace IVotesApi {
  export interface IVotesRes {
    resData: IVotesErrorData | IVotesSuccessData;
  }

  export interface IVotesSuccessData {
    error: boolean;
    votesData: IVotesData[];
  }

  export interface IVotesData {
    voteCount: number;
    optionId: string;
    voted: boolean;
  }

  export interface IVotesErrorData {
    message: string;
    error: boolean;
    errorCode?: number;
  }

  export interface IErrorData {
    response?: { data: { message: string; status_code: number } };
  }
}

export { IVotesApi };
