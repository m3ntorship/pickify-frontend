declare namespace ITextPollCreation {
  export interface IState {
    postCaption: { id: string; value: string };
    options: IOptionGroup.IOption[];
  }
}
export { ITextPollCreation };
