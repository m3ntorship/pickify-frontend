declare namespace IPostCreation {
  export interface IProps {
    createTextPollPost: (state: IState) => void;
    createMiniSurveyPollPost: (state: IState) => void;
  }
}
export { IPostCreation };
