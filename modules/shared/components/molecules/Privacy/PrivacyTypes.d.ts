declare namespace PrivacyTypes {
  export interface Props {
    privacyOptions: string[];
    withDivider: boolean;
    togglerIsChecked: boolean;
    handleTogglerChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }
}

export { PrivacyTypes };
