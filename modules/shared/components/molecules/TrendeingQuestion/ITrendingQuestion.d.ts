declare namespace ITrendingQuestion {
  export interface IProps {
    postCaption: string;
    type: 'Image Poll' | 'Mini Survey' | 'Text Poll';
    postId?: string;
  }
}

export type { ITrendingQuestion };
