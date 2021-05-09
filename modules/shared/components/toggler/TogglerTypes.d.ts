declare namespace TogglerTypes {
  export interface Props {
    size: 'default' | 'sm';
    disabled: boolean;
    isChecked: boolean;
    handleTogglerClick: () => void;
  }
}

export { TogglerTypes };
