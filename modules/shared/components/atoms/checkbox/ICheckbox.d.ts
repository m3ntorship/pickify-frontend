declare namespace ICheckbox {
  export interface ICheckBoxProps {
    disabled: boolean;
    size: 'Default' | 'Small';
    onClick?: () => void;
  }
  export interface ICheckBoxSvgProps {
    className: string;
    width: string;
    height: string;
  }
}
export { ICheckbox };
