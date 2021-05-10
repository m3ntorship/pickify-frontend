declare namespace IButton {
  export interface IProps {
    children?: string;
    disabled?: false | true;
    variant?: 'primary' | 'secondary' | 'text';
    size?: 'lg' | 'md' | 'sm';
    leftIcon?: false | true;
    rightIcon?: false | true;
    onlyIcon?: false | true;
    onClick?: () => void;
  }
}
export { IButton };
