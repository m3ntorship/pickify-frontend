import type * as ETextInput from './ETextInput';

declare namespace ITextInputs {
  export interface IProps {
    [property: string]: unknown;
    label?: string;
    id: string;
    variants: ETextInput.Variants;
    inputType: ETextInput.InputType;
    disabled: boolean;
    letter?: string;
  }
}
export { ITextInputs };
