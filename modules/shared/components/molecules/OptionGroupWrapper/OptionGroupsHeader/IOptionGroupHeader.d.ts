import type React from 'react';

declare namespace IOptionGroupHeader {
  export interface IProps {
    id: string;
    index: number;
    optionGroupName: string;
    // updateOptionsGroupNameHandler: (groupId: string, groupName: string) => void;
    onChangeOptionsGroupNameValue: (
      groupId: string,
      e: React.ChangeEvent<HTMLInputElement>,
    ) => void;
    onClickDeleteOptionsGroupNameValueHandler: (grorupId: string) => void;
    deleteOptionsGroupHandler: (grorupId: string) => void;
  }
}
export { IOptionGroupHeader };
