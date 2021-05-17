declare namespace ICheckbox {
  export interface ICheckBoxProps {
    disabled: boolean;
    size: 'Default' | 'Small';
    onMockClick?: () => void;
  }
  export interface ICheckBoxSvgProps {
    style: string;
  }
}
export { ICheckbox };
