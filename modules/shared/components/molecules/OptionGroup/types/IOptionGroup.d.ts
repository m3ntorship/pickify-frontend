import type {
  UseFormRegister,
  FieldValues,
  UseFormReset,
  DeepMap,
  FieldError,
} from 'react-hook-form';

declare namespace IOptionGroup {
  export interface IOption {
    id: string;
    value: string;
  }
  export interface IProps {
    groupId: string;
    options: IOption[];
    groupName?: string;
    setOptions: React.Dispatch<React.SetStateAction<IOption[]>>;
    register: UseFormRegister<FieldValues>;
    formSubmitted: boolean;
    reset: UseFormReset<FieldValues>;
    errors: DeepMap<FieldValues, FieldError>;
    dirtyFields: DeepMap<FieldValues, true>;
  }
}
export { IOptionGroup };
