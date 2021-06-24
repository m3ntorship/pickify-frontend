declare namespace IUseUploadedFiles {
  export interface IUploadedFiles {
    error: boolean;
    response: File | null;
    message: string;
  }
}
export { IUseUploadedFiles };
