declare namespace ITextDefault {
  export interface IProps {
    id: string;
    deletable?: boolean;
    letter: string;
    deleteInputHandler?: (e: Event) => void;
    placeholder?: string;
    register?: UseFormRegister;
    reset?: () => void;
    variants: string;
  }
}
export { ITextDefault };
