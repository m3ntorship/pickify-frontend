import type { FieldValues, UseFormRegister } from 'react-hook-form';
import type { IMiniSurveyPollCreation } from '../../organisms/MiniSurveyPollCreation/IMiniSurveyPollCreation';

declare namespace IOptionGroupWrapper {
  export interface IProps {
    optionGroup: {
      id: string;
      groupName: string;
      options: {
        id: string;
        value: string;
      }[];
    };
    index: number;
    register?: UseFormRegister<FieldValues>;
    deleteOptionGroup: (groupId: string) => void;
    miniSurveyState: IMiniSurveyPollCreation.IState;
    setMiniSurveyState: React.Dispatch<
      React.SetStateAction<IMiniSurveyPollCreation.IState>
    >;
    children?: React.ReactNode;
  }
}
export { IOptionGroupWrapper };
