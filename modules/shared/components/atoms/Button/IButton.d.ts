declare namespace IButton {
  enum buttonVariantValues {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TEXT = 'text',
  }
  enum buttonSizeValues {
    large = 'lg',
    meduim = 'md',
    small = 'sm',
  }
  export interface IProps {
    children?: string | null;
    disabled?: boolean;
    variant?: buttonVariantValues;
    size?: buttonSizeValues;
    leftIcon?: boolean;
    rightIcon?: boolean;
    onlyIcon?: boolean;
    onClick?: () => void;
  }
}
export { IButton };
