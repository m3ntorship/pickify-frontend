import type * as EButton from './EButton';

declare namespace IButton {
  export interface IProps {
    [property: string]: unknown;
    children?: string | null;
    disabled?: boolean;
    variant: EButton.buttonVariantValues;
    size: EButton.buttonSizeValues;
    leftIcon?: boolean;
    rightIcon?: boolean;
    onlyIcon?: boolean;
    onClick?: () => void;
  }
}
export { IButton };
