import type { ChangeEvent } from 'react';
import type * as ETextInput from './ETextInput';

declare namespace ITextInputs {
  export interface IProps extends IData {
    [property: string]: unknown;
    label?: string;
    variants: ETextInput.Variants;
    inputType: ETextInput.InputType;
    disabled?: boolean;
    letter?: string;
    reset?: ({ [key]: unknown }) => void;
    onChange?: (e: ChangeEvent) => void;
  }

  export interface IData {
    id: string;
  }
}
export { ITextInputs };
