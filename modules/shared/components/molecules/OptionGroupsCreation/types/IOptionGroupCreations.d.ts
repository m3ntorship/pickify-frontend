declare namespace IOptionGroupCreations {
  export interface IOptionGroup {
    id: string;
    groupName: string;
    options: { id: string; letter: string; value: string }[];
  }
}
export { IOptionGroupCreations };
