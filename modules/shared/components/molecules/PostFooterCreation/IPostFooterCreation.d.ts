declare namespace IPostFooterCreation {
  export interface IProps extends IHandlers {
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    togglerIsChecked: boolean;
    disabled: boolean;
    handleTogglerChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  export interface IHandlers {
    handleCancelClick?: () => void;
    handleSubmitClick?: () => void;
  }
}
export { IPostFooterCreation };
