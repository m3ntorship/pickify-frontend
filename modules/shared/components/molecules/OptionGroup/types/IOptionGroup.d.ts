declare namespace IOptionGroup {
  export interface IOption {
    id: string;
    value: string;
  }
  export interface IProps {
    id: string;
    groupName?: string;
    // options: { id: string; letter: string; value: string }[];
    // addOptionHandler: (GroupId: string) => void;
    // deleteOptionHandler: (optionId: string) => void;
    // deleteGroupHandler: () => void;
  }
}
export { IOptionGroup };
