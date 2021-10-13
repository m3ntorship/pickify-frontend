declare namespace IDropDown {
  export interface IProps extends IHandlers {
    options: IOptions[];
    variant: 'image' | 'post';
    size: 'md' | 'sm';
    isAuthenticated?: boolean;
  }

  export interface IOptions {
    body: string;
    id: string;
  }

  export interface IHandlers {
    onOptionMenuClick: (id: string) => void;
  }
}

export { IDropDown };
