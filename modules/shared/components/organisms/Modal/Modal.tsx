import React, { useEffect } from 'react';
import type { FC, ReactElement, MouseEvent } from 'react';
import type { IModal } from './IModal';
import styles from './Modal.module.css';

const Modal: FC<IModal.IProps> = ({
  children,
  closeModalHandler,
}): ReactElement => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return (): void => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const preventClickHandler = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  return (
    <div
      data-testid="layer"
      className={styles.layer}
      onClick={closeModalHandler}
      aria-hidden
      role="banner"
    >
      <div
        className={styles.modal}
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
