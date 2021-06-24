declare namespace ICreateImagePoll {
  export interface IProps {
    postType: string;
    postCaption: { id: string; value: string };
    validImages: ValidImages[];
    hiddenIdentity: boolean;
    privacy: string;
  }

  export interface ValidImages {
    imgId: string;
    imgCaption: string;
    file: File | string;
  }

  export interface InvalidImages {
    imgId?: string;
    error: boolean;
    message: string;
  }
}
export { ICreateImagePoll };
