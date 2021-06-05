declare namespace IPrivacy {
  export interface IProps {
    togglerLabel?: string;
    privacySelectorLabel?: string;
    privacyOptions: string[];
    withDivider: boolean;
    togglerIsChecked: boolean;
    handleTogglerChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }
}

export { IPrivacy };
