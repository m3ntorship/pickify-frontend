import type { EPostType } from './EPostType';

declare namespace IPostFeed {
  export interface IPosts {
    data: IErrorData | Posts;
  }
  export interface Posts {
    data: {
      postsCount: number;
      posts: IPost[];
    };
  }
  export interface IErrorData {
    error: boolean;
    errorCode: number;
    message: string;
  }

  export interface IPost {
    created_at: string;
    is_hidden: boolean;
    id: string;
    type: EPostType;
    options_groups: { groups: IGroups[] };
    caption: string;
    media: IMedia[];
    user: IUser[];
  }

  export interface IGroups {
    id: string;
    options: IOptions[];
    media: IMedia[];
    name: string;
  }

  export interface IOptions {
    id: string;
    votes_count: number;
    media: IMedia[];
    body: string;
  }

  export interface IMedia {
    url: string;
  }

  export interface IUser {
    profile_pic: string;
    name: string;
    id: string;
  }
}

export { IPostFeed };
