import React, { useState } from 'react';
import type { FC, ReactElement } from 'react';
import classNames from 'classnames';
import type { IDropDown } from './IDropDown';
import VerticalThreeDotsIcon from '../../icons/verticalThreeDots.svg';
import styles from './DropDown.module.css';

const DropDown: FC<IDropDown.IProps> = ({
  options,
  onOptionMenuClick,
  variant,
}): ReactElement => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const showMenuHandler = (): void => {
    setShowMenu(!showMenu);
  };

  const menuIconClasses = classNames(styles['menu-icon-container'], {
    'rounded-full p-2': variant === 'image',
  });

  return (
    <div className="flex items-start relative">
      <div
        aria-hidden
        onClick={showMenuHandler}
        data-testid="menu-icon"
        className={menuIconClasses}
      >
        <VerticalThreeDotsIcon className={styles['menu-icon']} />
      </div>
      {showMenu && (
        <div role="menu" className={styles.menu} data-testid="menu">
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
