declare namespace IButton {
  export interface IProps {
    children?: string;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'text';
    size?: 'lg' | 'md' | 'sm';
    leftIcon?: boolean;
    rightIcon?: boolean;
    onlyIcon?: boolean;
    onClick?: () => void;
  }
}
export { IButton };
