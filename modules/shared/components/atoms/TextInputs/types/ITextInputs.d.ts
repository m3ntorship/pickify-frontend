import type React, { ChangeEvent } from 'react';
import type * as ETextInput from './ETextInput';

declare namespace ITextInputs {
  export interface IProps extends IData, IHandlers {
    label?: string;
    variants: ETextInput.Variants;
    inputType: ETextInput.InputType;
    disabled?: boolean;
    letter?: string;
    extraClasses?: string;
    placeholder: string;
    name?: string;
  }

  export interface IData {
    id: string;
    value: string;
  }

  export interface IHandlers {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onClick: (e: React.MouseEvent<SVGElement>) => void;
  }
}
export { ITextInputs };
