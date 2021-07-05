import React from 'react';
import type { FC, ReactElement } from 'react';
import classNames from 'classnames';
import type { IDropDown } from './IDropDown';
import VerticalThreeDotsIcon from '../../icons/verticalThreeDots.svg';
import styles from './DropDown.module.css';
import { useDetectClickOut } from '../../../hooks/useDetectClickOut/useDetectClickOut';

const DropDown: FC<IDropDown.IProps> = ({
  options,
  onOptionMenuClick,
  variant,
}): ReactElement => {
  const { nodeRef, triggerRef, setShow, show } = useDetectClickOut(false);

  const menuIconClasses = classNames(styles['menu-icon-container'], {
    'rounded-full p-2': variant === 'image',
  });

  return (
    <div className="flex items-start relative">
      <div
        aria-hidden
        data-testid="menu-icon"
        className={menuIconClasses}
        ref={triggerRef}
      >
        <VerticalThreeDotsIcon className={styles['menu-icon']} />
      </div>
      {show && (
        <div
          role="menu"
          className={styles.menu}
          data-testid="menu"
          ref={nodeRef}
        >
          {options.map((option) => (
            <button
              className={styles['menu-item']}
              role="menuitem"
              type="button"
              name="option"
              id={option.id}
              key={option.id}
              onClick={(e): void => {
                onOptionMenuClick(e.currentTarget.id);
                setShow(!show);
              }}
              data-testid="menu-button"
            >
              {option.body}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
