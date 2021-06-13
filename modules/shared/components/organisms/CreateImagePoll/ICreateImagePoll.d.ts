declare namespace ICreateImagePoll {
  export interface IProps {
    imgId: string;
    file: File;
    error: boolean;
    message: string;
    caption: string;
  }
}
export { ICreateImagePoll };
