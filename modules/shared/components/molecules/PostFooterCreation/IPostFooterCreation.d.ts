declare namespace IPostFooterCreation {
  export interface IProps extends IHandlers {
    handlePrivacySelectChange: (
      e: React.ChangeEvent<HTMLSelectElement>,
    ) => void;
    togglerIsChecked: boolean;
    postButtonIsDisabled: boolean;
    handleTheRadioButtonOnChange: (
      e: React.ChangeEvent<HTMLInputElement>,
    ) => void;
  }
  export interface IHandlers {
    handleCancelButtonClick?: () => void;
    handleSubmitButtonClick?: () => void;
  }
}
export { IPostFooterCreation };
