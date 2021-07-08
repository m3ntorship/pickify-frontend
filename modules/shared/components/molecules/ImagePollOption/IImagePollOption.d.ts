declare namespace IImagePollOption {
  export interface IProps {
    media: { url: string }[];
    imgCaption: string;
    imgCaptionLetter: string;
    optionId: string;
    leastVoted: boolean;
    mostVoted: boolean;
    percentage: number;
    isVoted: boolean;
    onOptionClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }
}
export { IImagePollOption };
