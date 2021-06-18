import type { IUploadedFiles } from '@modules/shared/logic/uploadedFiles/IUploadedFiles';

declare namespace ICreateImagePoll {
  export interface IProps {
    postType: string;
    postCaption: { id: string; value: string };
    imagesData: IUploadedFiles.IImagesData[];
    hiddenIdentity: boolean;
    privacy: string;
  }
}
export { ICreateImagePoll };
