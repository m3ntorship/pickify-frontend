declare namespace IOptionGroupWrapper {
  export interface IProps {
    id: string;
    index: number;
    optionsGroupName: string;
    updateOptionsGroupNameHandler: (groupId: string, groupName: string) => void;
    deleteOptionsGroupHandler: (grorupId: string) => void;
    children?: React.ReactNode;
  }
}
export { IOptionGroupWrapper };
