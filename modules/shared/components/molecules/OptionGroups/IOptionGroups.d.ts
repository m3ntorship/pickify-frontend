import type {
  UseFormRegister,
  FieldValues,
  UseFormReset,
  DeepMap,
  FieldError,
} from 'react-hook-form';

import type * as ETextInput from '../../atoms/TextInputs/types/ETextInput';
import type { IMiniSurveyPollCreation } from '../../organisms/MiniSurveyPollCreation/IMiniSurveyPollCreation';

declare namespace IOptionGroups {
  export interface IProps {
    groups: {
      id: string;
      groupName: string;
      options: {
        id: string;
        value: string;
      }[];
    }[];
    register?: UseFormRegister<FieldValues>;
    isSubmitted?: boolean;
    reset?: UseFormReset<FieldValues>;
    errors?: DeepMap<FieldValues, FieldError>;
    dirtyFields?: DeepMap<FieldValues, true>;
    variantMessage: (id: string) => ETextInput.Variants;
    addOptionGroup: () => void;
    deleteOptionGroup: (groupId: string) => void;
    setOptionsInGroup?: (
      options: IOptionGroup.IOption[],
      groupId: string,
    ) => void;
    miniSurveyState: IMiniSurveyPollCreation.IState;
    setMiniSurveyState: React.Dispatch<
      React.SetStateAction<IMiniSurveyPollCreation.IState>
    >;
  }
}
export { IOptionGroups };
