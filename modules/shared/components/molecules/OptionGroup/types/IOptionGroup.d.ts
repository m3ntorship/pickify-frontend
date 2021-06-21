import type {
  UseFormRegister,
  FieldValues,
  UseFormReset,
  DeepMap,
  FieldError,
} from 'react-hook-form';
import type { ITextPollCreation } from '../../../organisms/TextPollCreation/types/ITextPollCreation';
import type { IMiniSurveyPollCreation } from '../../../organisms/MiniSurveyPollCreation/IMiniSurveyPollCreation';
import type * as ETextInput from '../../../atoms/TextInputs/types/ETextInput';

declare namespace IOptionGroup {
  export interface IOption {
    id: string;
    body: string;
  }
  export interface IProps {
    variantMessage: (id: string) => ETextInput.Variants;
    groupId: string;
    options: IOption[];
    groupName?: string;
    setOptions?: React.Dispatch<React.SetStateAction<IOption[]>>;
    setOptionsInGroup?: (options: IOption[], groupId: string) => void;
    register?: UseFormRegister<FieldValues>;
    formSubmitted?: boolean;
    reset?: UseFormReset<FieldValues>;
    errors?: DeepMap<FieldValues, FieldError>;
    dirtyFields?: DeepMap<FieldValues, true>;
    textPollState?: ITextPollCreation.IState;
    setTextPollState?: (state: ITextPollCreation.IState) => void;
    miniSurveyState?: IMiniSurveyPollCreation.IState;
    setMiniSurveyState?: React.Dispatch<
      React.SetStateAction<IMiniSurveyPollCreation.IState>
    >;
  }
}
export { IOptionGroup };
