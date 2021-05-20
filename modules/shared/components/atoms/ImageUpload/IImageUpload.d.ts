import type React from 'react';

declare namespace IImageUpload {
  export interface IProps {
    onChangeInputHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
}
export { IImageUpload };
