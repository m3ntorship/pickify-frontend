declare namespace IOptionGroups {
  export interface IOptionGroup {
    id: number;
    groupName: string;
    options: { id: number; letter: string; value: string }[];
  }
}
export { IOptionGroups };
