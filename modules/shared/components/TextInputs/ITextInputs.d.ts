declare namespace ITextInputs {
  export interface IProps {
    [property: string]: unknown;
    label: string;
    id: string;
    variants: 'default' | 'error' | 'success';
    inputType:
      | 'choices'
      | 'default'
      | 'left-icon'
      | 'prefix-dropdown'
      | 'prefix'
      | 'right-icon';
    disabled: boolean;
    letter?: string;
  }
}
export { ITextInputs };
