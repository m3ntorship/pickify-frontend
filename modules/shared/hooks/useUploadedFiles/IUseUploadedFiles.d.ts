declare namespace IUseUploadedFiles {
  export interface IUploadedFiles {
    error: boolean;
    response: Blob | null;
    message: string;
  }
}
export { IUseUploadedFiles };
