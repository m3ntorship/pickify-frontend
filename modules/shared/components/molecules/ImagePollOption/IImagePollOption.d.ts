declare namespace IImagePollOption {
  export interface IProps {
    imageUrl: string;
    imgCaption: string;
    imgCaptionLetter: string;
    optionId: string;
    leastVoted: boolean;
    mostVoted: boolean;
    percentage: number;
    isVoted: boolean;
  }
}
export { IImagePollOption };
