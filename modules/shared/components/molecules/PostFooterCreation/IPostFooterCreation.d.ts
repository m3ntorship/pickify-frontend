declare namespace IPostFooterCreation {
  export interface IProps {
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    togglerIsChecked: boolean;
    disabled: boolean;
    handleTogglerChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
}
export { IPostFooterCreation };
