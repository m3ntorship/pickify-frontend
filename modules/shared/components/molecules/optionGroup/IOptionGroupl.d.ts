import type {
  SinglePostResponse,
  SinglePostResponseOptionsGroups,
} from '@m3ntorship/posts-client/dist/client';

declare namespace IOptionGroup {
  export interface IProps {
    optionsGroups: SinglePostResponseOptionsGroups;
    caption: SinglePostResponse['caption'];
  }
}

export { IOptionGroup };
