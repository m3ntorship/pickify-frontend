declare namespace IPostFooter {
  export interface IProps {
    numberOfVotes: number;
    showResult: boolean;
    sharePostHandler: (
      postId: string,
      setCopied: (copied: boolean) => void,
      copied: boolean,
    ) => void;
    postId: string;
  }
}
export { IPostFooter };
