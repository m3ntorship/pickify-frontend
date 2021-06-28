import React, { useState } from 'react';

import type { FC, ReactElement } from 'react';
import type { IDropDown } from './IDropDown';
import VerticalThreeDotsIcon from '../../icons/verticalThreeDots.svg';
import styles from './DropDown.module.css';

const DropDown: FC<IDropDown.IProps> = ({
  options,
  onOptionMenuClick,
}): ReactElement => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const showMenuHandler = (): void => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex">
      <VerticalThreeDotsIcon
        onClick={showMenuHandler}
        className={styles['menu-icon']}
        data-testid="menu-icon"
      />
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
              onClick={onOptionMenuClick}
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
