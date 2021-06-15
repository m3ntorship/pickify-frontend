import type React from 'react';
import type { UseFormRegister } from 'react-hook-form';

declare namespace IImageUpload {
  export interface IProps {
    onChangeInputHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    register?: UseFormRegister<FieldValues>;
  }
}
export { IImageUpload };
