declare namespace IMiniSurveyPollCreation {
  export interface IState {
    postType: string;
    postCaption: {
      id: string;
      value: string;
    };
    groups: {
      id: string;
      groupName: string;
      options: {
        id: string;
        value: string;
      }[];
    }[];
    hiddenIdentity: boolean;
    privacy: string;
    image: string;
  }
}
export { IMiniSurveyPollCreation };
