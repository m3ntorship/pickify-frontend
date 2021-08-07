import React from 'react';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import { EPostType } from '@modules/shared/types/postFeed/EPostType';
import type { ITextOptionViewUncoverd } from './ITextOptionViewUncoverd';
import styles from './TextOptionViewUncoverd.module.css';
import Check from '../../icons/checkMarkDefault.svg';
import GoldenStarIcon from '../../icons/goldenStar.svg';

const TextOptionViewUncoverd: FC<ITextOptionViewUncoverd.IProps> = ({
  letter,
  optionBody,
  percentage,
  isOptionChecked,
  mostVoted,
  id,
  isExpanded,
  type,
}): ReactElement => {
  const textPoll = classNames(styles.btnBody, {
    [styles.mostVoted]: mostVoted,
    [styles.leastVoted]: !mostVoted,
  });
  const svgClasses = classNames({
    [styles.svgDark]: !mostVoted,
    [styles.svgWhite]: mostVoted,
  });
  return type !== EPostType.MiniSurvey || isExpanded ? (
    <button
      type="button"
      id={id}
      data-testid={id}
      className={textPoll}
      disabled
    >
      <span className={styles['flex-container']}>
        {letter && <span className={styles.letter}>{letter}</span>}
        <p className={styles.option} dir="auto">
          {optionBody}
        </p>
        <span />
        {isOptionChecked && (
          <span className={styles['svg-check']}>
            <Check className={svgClasses} />
          </span>
        )}
      </span>
      <span className={styles.percentage}>
        {mostVoted ? <GoldenStarIcon className={styles.goldenStarIcon} /> : ''}
        {percentage}%
      </span>
    </button>
  ) : (
    <>
      mostVoted &&
      <p>{optionBody}</p>
    </>
  );
};
export default TextOptionViewUncoverd;
