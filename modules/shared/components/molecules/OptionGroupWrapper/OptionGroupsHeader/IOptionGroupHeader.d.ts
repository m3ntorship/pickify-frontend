import type { UseFormRegister, FieldValues } from 'react-hook-form';
import type React from 'react';
import type { IMiniSurveyPollCreation } from '@modules/shared/components/organisms/MiniSurveyPollCreation/IMiniSurveyPollCreation';

declare namespace IOptionGroupHeader {
  export interface IProps {
    deleteGroupHandler?: () => void;
    groupIndex: number;
    groupId?: string;
    miniSurveyState: IMiniSurveyPollCreation.IState;
    setMiniSurveyState: React.Dispatch<
      React.SetStateAction<IMiniSurveyPollCreation.IState>
    >;
    register?: UseFormRegister<FieldValues> | undefined;
  }
}
export { IOptionGroupHeader };
