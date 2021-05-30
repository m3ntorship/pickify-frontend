declare namespace IOptionGroup {
  export interface IOption {
    id: string;
    letter?: string;
    value?: string;
  }
  export interface IProps {
    handleGroupDelete: () => void;
  }
}
export { IOptionGroup };
