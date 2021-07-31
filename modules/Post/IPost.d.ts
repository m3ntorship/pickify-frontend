import type { IPostFeed } from '../shared/types/postFeed/IPostFeed';

declare namespace IPost {
  export interface Props {
    postData: IPostFeed.IPost;
  }
  export interface UpdateVotedPost {
    resData: { voteCount: number; voted: boolean; optionId: string }[];
    groupId: string;
  }
}

export { IPost };
