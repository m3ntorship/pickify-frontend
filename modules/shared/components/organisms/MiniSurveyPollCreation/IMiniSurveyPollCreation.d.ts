declare namespace IMiniSurveyPollCreation {
  export interface IProps {
    createMiniSurveyPollPost: (state: IState) => void;
  }
  export interface IState {
    postType: string;
    postCaption: {
      id: string;
      value: string;
    };
    groups: {
      id: string;
      name: string;
      options: {
        id: string;
        body: string;
      }[];
    }[];
    hiddenIdentity: boolean;
    privacy: string;
    image: string;
  }
}
export { IMiniSurveyPollCreation };
