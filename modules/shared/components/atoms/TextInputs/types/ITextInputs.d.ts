import type * as ETextInput from './ETextInput';

declare namespace ITextInputs {
  export interface IProps extends IData, IHandlers {
    [property: string]: unknown;
    label?: string;
    variants: ETextInput.Variants;
    inputType: ETextInput.InputType;
    disabled?: boolean;
    letter?: string;
  }

  export interface IData {
    id: string;
  }

  export interface IHandlers {
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  }
}
export { ITextInputs };
