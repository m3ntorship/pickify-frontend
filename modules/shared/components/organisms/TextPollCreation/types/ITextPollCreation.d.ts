declare namespace ITextPollCreation {
  export interface IState {
    postType: string;
    postCaption: { id: string; value: string };
    options: IOptionGroup.IOption[];
    hiddenIdentity: boolean;
    privacy: string;
  }
}
export { ITextPollCreation };
