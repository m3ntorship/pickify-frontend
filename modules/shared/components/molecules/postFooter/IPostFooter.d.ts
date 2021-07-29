declare namespace IPostFooter {
  export interface IProps {
    numberOfVotes: number;
    showResult: boolean;
    sharePostHandler: (postId: string) => void;
    postId: string;
  }
}
export { IPostFooter };
