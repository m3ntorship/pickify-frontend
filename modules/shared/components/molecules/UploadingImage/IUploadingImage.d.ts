import type { ReactElement } from 'react';

declare namespace IUploadingImage {
  export interface IProps {
    id: string;
    index: number;
    file: File;
    children?: ReactElement;
    entityType: string;
    handleVerticalThreeDotsClick: (optionId: string) => void;
  }
}
export { IUploadingImage };
