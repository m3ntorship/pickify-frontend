declare namespace IPostCreationValidationFields {
  export interface IFields {
    imagePoll: { postCaption: Record<string, string> };
    textPoll: { postCaption: Record<string, string> };
    miniSurvey: { postCaption: Record<string, string> };
    uploadedFilesInoption: string;
    uploadedFilesInpost: string;
    options: Record<string, string>;
  }
}

export { IPostCreationValidationFields };
