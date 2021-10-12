import type { MediaCreationResponse } from '@m3ntorship/posts-client/dist/media-client';
import type {
  InlineResponse201,
  InlineResponse2011,
} from '@m3ntorship/posts-client/dist/post-client';

declare namespace IpostCreationAPI {
  export interface IErrorResponse {
    response?: {
      data: {
        message: string[];
        status_code: number;
      };
    };
  }
  export interface IInitPostReturnedRes extends IReturnedErr {
    data: InlineResponse201;
  }
  export interface ICreateGroupsReturnedRes extends IReturnedErr {
    data: InlineResponse2011;
  }
  export interface ICreateMediaFileReturnedRes extends IReturnedErr {
    data: MediaCreationResponse;
  }
  export interface IRaisePostCreationFinishFlagReturnedRes
    extends IReturnedErr {
    data: string;
  }
  export interface ICreatePollReturnedRes extends IReturnedErr {
    data: string | null;
  }
  export interface IReturnedErr {
    errors: string[];
    statusCode: number;
  }
}

export { IpostCreationAPI };
