declare namespace IOptionGroupWrapper {
  export interface IProps {
    id: string;
    index: number;
    optionsGroupName: string;
    onChangeOptionsGroupNameValue: (
      groupId: string,
      e: React.ChangeEvent<HTMLInputElement>,
    ) => void;
    onClickDeleteOptionsGroupNameValueHandler: (groupId: string) => void;
    deleteOptionsGroupHandler: (grorupId: string) => void;
    children?: React.ReactNode;
  }
}
export { IOptionGroupWrapper };
