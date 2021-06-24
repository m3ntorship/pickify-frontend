import type { FC, ReactElement, MouseEvent } from 'react';
import type { IModal } from './IModal';

const Modal: FC<IModal.IProps> = ({
  children,
  closeModalHandler,
}): ReactElement => {
  const preventClickHandler = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  return (
    <div
      className="flex justify-center items-start absolute inset-0 w-full h-full bg-dark bg-opacity-50 z-20 px-4"
      onClick={closeModalHandler}
      aria-hidden
      role="banner"
    >
      <div
        className="z-10 transform translate-y-48"
        onClick={preventClickHandler}
        aria-hidden
        role="treeitem"
      >
        {children}
      </div>
    </div>
  );
};
export default Modal;
