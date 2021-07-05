declare namespace IImagePollCovered {
  export interface IProps extends IHandlers {
    isOneImageVote: boolean;
    like?: boolean;
    dislike?: boolean;
    id: string;
  }
  export interface IHandlers {
    onOptionClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }
}

export { IImagePollCovered };
