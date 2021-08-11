import React, { useEffect, useRef, useState } from 'react';
import type { FC, ReactElement, MutableRefObject } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { footerData } from './footerData';
import styles from './Footer.module.css';
import {
  getItemsWidth,
  getNumberOfVisibleElements,
  getTotalItemsWidth,
  getTotalSpacing,
} from './footerLogic/footerLogic';

const Footer: FC = (): ReactElement => {
  const [isResponsive, setIsResponsive] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(true);
  const [footerState, setFooterState] = useState(footerData);
  const linkItems = useRef([]) as MutableRefObject<HTMLLIElement[]>;
  const footer = useRef() as MutableRefObject<HTMLElement>;
  const listParent = useRef() as MutableRefObject<HTMLUListElement>;
  const buttonTextMore = useRef() as MutableRefObject<HTMLButtonElement>;

  const footerClasses = classNames(styles.footer, {
    'items-center': !isResponsive,
    'items-start': isResponsive,
  });

  useEffect(() => {
    const totalSpacing: number = getTotalSpacing(linkItems.current.length);

    const itemsWidth: number[] = getItemsWidth(linkItems.current);

    const totalItemsWidth: number = getTotalItemsWidth(
      itemsWidth,
      totalSpacing,
    );

    // check if the footer width is less than total linksWidth + total margin
    if (footer.current.offsetWidth < totalItemsWidth) {
      const {
        current: { offsetWidth: listWidth },
      } = listParent;
      const {
        current: { offsetWidth: buttonWidth },
      } = buttonTextMore;

      const visibleLinks = getNumberOfVisibleElements(
        linkItems.current,
        listWidth,
        buttonWidth,
      );

      setFooterState(
        footerState.map((item, index) => {
          if (index >= visibleLinks) {
            return { ...item, visible: false };
          }
          return item;
        }),
      );
      setIsResponsive(!isResponsive);
    } else {
      setShowButton(!showButton);
    }
  }, []);

  const showAllLinks = (): void => {
    setFooterState(footerState.map((item) => ({ ...item, visible: true })));
    setShowButton(!showButton);
  };

  return (
    <footer className={footerClasses} ref={footer}>
      <div>
        <ul className="flex flex-wrap items-start p-0 m-0" ref={listParent}>
          {footerState.map((footerLink, index) => (
            <li
              key={footerLink.name}
              className={`mr-3 last:mr-0 leading-4 ${
                !footerLink.visible ? 'hidden' : ''
              } ${isResponsive ? 'mb-2' : 'mb-4'}`}
              ref={(el: HTMLLIElement): HTMLLIElement => {
                linkItems.current[index] = el;
                return el;
              }}
            >
              <Link href={footerLink.path}>
                <a className="hover:underline font-light text-xs text-dark-grey">
                  {footerLink.content}
                </a>
              </Link>
            </li>
          ))}
          {showButton && (
            <button
              className="font-light text-xs text-dark-grey focus:outline-none"
              type="button"
              onClick={showAllLinks}
              ref={buttonTextMore}
            >
              More
            </button>
          )}
        </ul>
      </div>
      <div>
        <h3 className="font-light text-xs text-grey">Pikcify © 2021</h3>
      </div>
    </footer>
  );
};

export default Footer;
