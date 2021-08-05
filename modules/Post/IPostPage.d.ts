import type { IPostFeed } from '../shared/types/postFeed/IPostFeed';

declare namespace IPostPage {
  export interface Props {
    data: IPostFeed.IPost;
  }
  export interface UpdateVotedPost {
    resData: { voteCount: number; voted: boolean; optionId: string }[];
    groupId: string;
  }
}

export { IPostPage };
