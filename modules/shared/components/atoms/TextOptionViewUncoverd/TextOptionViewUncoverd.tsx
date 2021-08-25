import React from 'react';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import { EPostType } from '../../../types/postFeed/EPostType';
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
  const textPollClasses = classNames(styles.btnBody, {
    [styles.mostVoted]: mostVoted,
    [styles.leastVoted]: !mostVoted,
  });

  return type !== EPostType.MiniSurvey || isExpanded ? (
    <button
      type="button"
      id={id}
      data-testid={id}
      className={textPollClasses}
      disabled
      style={{
        width: `${percentage ?? 0}%`,
      }}
    >
      <span className={styles['flex-container']}>
        {letter && <span className={styles.letter}>{letter}</span>}
        <p className={styles.option} dir="auto">
          {optionBody}
        </p>
        <span />
        {isOptionChecked && <Check className="fill-dark ml-2" />}
      </span>
      <span className={styles.percentage}>
        {mostVoted ? <GoldenStarIcon className={styles.goldenStarIcon} /> : ''}
        {percentage}%
      </span>
    </button>
  ) : (
    <>{mostVoted && <p>{optionBody}</p>}</>
  );
};
export default TextOptionViewUncoverd;
