declare namespace IOptionGroupHeader {
  export interface IProps {
    id: string;
    index: number;
    optionGroupName: string;
    updateOptionsGroupNameHandler: (groupId: string, groupName: string) => void;
    deleteOptionsGroupHandler: (grorupId: string) => void;
  }
}
export { IOptionGroupHeader };
