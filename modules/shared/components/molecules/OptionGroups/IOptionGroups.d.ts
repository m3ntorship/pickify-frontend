declare namespace IOptionGroups {
  export interface IProps {
    groups: {
      id: string;
      name: string;
      options: {
        id: string;
        body: string;
      }[];
    }[];
    onChangeOptionsGroupNameValue: (
      groupId: string,
      e: React.ChangeEvent<HTMLInputElement>,
    ) => void;
    onClickDeleteOptionsGroupNameValueHandler: (groupId: string) => void;
    addOptionsGroupHandler: () => void;
    deleteOptionsGroupHandler: (groupId: string) => void;
    onChangeOptionValueHandler: (
      optionId: string,
      groupId: string,
      e: React.ChangeEvent<HTMLInputElement>,
    ) => void;
    onClickDeleteOptionValueHandler: (
      optionId: string,
      groupId: string,
    ) => void;
    onBlurOptionHandler: (
      optionId: string,
      groupId: string,
      e: React.ChangeEvent<HTMLInputElement>,
    ) => void;
    addOptionHandler: (groupId: string) => void;
    deleteOptionHandler: (optionId: string, groupId: string) => void;
  }
}
export { IOptionGroups };
