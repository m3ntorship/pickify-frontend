import type { SinglePostResponse } from '@m3ntorship/posts-client/dist/client';
import type { EPostType } from './EPostType';

declare namespace IPostFeed {
  export interface IPosts {
    data: { posts: SinglePostResponse[] | undefined };
  }

  export interface IPost {
    created_at: string;
    is_hidden: boolean;
    id: string;
    type: 'image poll' | 'mini_survey' | 'text poll';
    options_groups: { groups: IGroup[] };
    caption: string;
    user: IUser;
    media: { url: string }[];
  }
  export interface IGroup {
    id: string;
    options: IOptions[];
    name: string;
  }
  export interface IOptions {
    id: string;
    body: string;
    media: { url: string }[];
  }
  export interface IUser {
    profile_pic: string;
    name: string;
    id: string;
  }
  export interface IUseless {
    posts: EPostType;
  }
}
export { IPostFeed };
