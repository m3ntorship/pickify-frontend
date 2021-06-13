import type { ITextPollCreation } from '@modules/shared/components/organisms/TextPollCreation/types/ITextPollCreation';
import type {
  UseFormRegister,
  FieldValues,
  UseFormReset,
  DeepMap,
  FieldError,
} from 'react-hook-form';
import type * as ETextInput from '../../../atoms/TextInputs/types/ETextInput';

declare namespace IOptionGroup {
  export interface IOption {
    id: string;
    value: string;
  }
  export interface IProps {
    variantMessage: (id: string) => ETextInput.Variants;
    groupId: string;
    options: IOption[];
    groupName?: string;
    setOptions: React.Dispatch<React.SetStateAction<IOption[]>>;
    register?: UseFormRegister<FieldValues>;
    formSubmitted?: boolean;
    reset?: UseFormReset<FieldValues>;
    errors?: DeepMap<FieldValues, FieldError>;
    dirtyFields?: DeepMap<FieldValues, true>;
    textPollState?: ITextPollCreation.IState;
    setTextPollState?: (state: ITextPollCreation.IState) => void;
  }
}
export { IOptionGroup };
