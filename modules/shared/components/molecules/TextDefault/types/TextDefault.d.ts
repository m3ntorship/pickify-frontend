declare namespace ITextDefault {
  export interface IProps {
    id: string;
    deletable?: boolean;
    letter: string;
    deleteInputHandler?: (e: Event) => void;
    placeholder?: string;
  }
}
export { ITextDefault };
