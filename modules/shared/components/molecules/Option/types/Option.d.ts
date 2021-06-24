import type {
  ChangeHandler,
  RefCallBack,
  UseFormReset,
  FieldValues,
} from 'react-hook-form';
import type { IMiniSurveyPollCreation } from '../../../organisms/MiniSurveyPollCreation/IMiniSurveyPollCreation';
import type { ITextPollCreation } from '../../../organisms/TextPollCreation/types/ITextPollCreation';
import type * as ETextInput from '../../../atoms/TextInputs/types/ETextInput';

declare namespace IOption {
  export interface IProps {
    id: string;
    deletable?: boolean;
    letter: string;
    deleteInputHandler?: (e: Event) => void;
    placeholder?: string;
    register?: {
      onChange: ChangeHandler;
      onBlur: ChangeHandler;
      ref: RefCallBack;
      name: string;
    };
    reset?: UseFormReset<FieldValues>;
    variants: ETextInput.Variants;
    textPollState?: ITextPollCreation.IState;
    setTextPollState?: (state: textPollState) => void;
    miniSurveyState?: IMiniSurveyPollCreation.IState;
    setMiniSurveyState?: React.Dispatch<
      React.SetStateAction<IMiniSurveyPollCreation.IState>
    >;
  }
}
export { IOption };
