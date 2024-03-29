import type * as EButton from './EButton';

declare namespace IButton {
  export interface IProps extends IHandlers {
    [property: string]: unknown;
    buttonText?: string | null;
    disabled?: boolean;
    variant: EButton.buttonVariantValues;
    size: EButton.buttonSizeValues;
    leftIcon?: boolean;
    rightIcon?: boolean;
    onlyIcon?: boolean;
    buttonType?: 'button' | 'reset' | 'submit';

    id?: string;
  }

  export interface IHandlers {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }
}
export { IButton };
