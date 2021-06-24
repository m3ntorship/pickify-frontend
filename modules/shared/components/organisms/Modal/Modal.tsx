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
      className="flex justify-center absolute inset-0 w-full h-full bg-dark bg-opacity-50 z-20"
      onClick={closeModalHandler}
      aria-hidden
    >
      <div
        className="z-10 transform translate-y-48"
        onClick={preventClickHandler}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
};
export default Modal;
