import type { IPostFeed } from '../../types/postFeed/IPostFeed';
import type { IVotesLogic } from './IVotesLogic';

export const getOptionsVotes = (options: IPostFeed.IOptions[]): number[] => {
  const optionsVotes: number[] = options.map((option) => option.vote_count);
  return optionsVotes;
};

export const calculateTotalVotes = (votesGroup: number[]): number =>
  votesGroup.reduce((accumulator, currentValue) => accumulator + currentValue);

export const calculatePercentage = (
  optionsVotes: number[],
  totalVotes: number,
): number[] => {
  const maximumProgress = 100;
  const optionsProgress = optionsVotes.map((optionVotes) => {
    const progress = (optionVotes / totalVotes) * maximumProgress;
    return Math.round(progress);
  });
  return optionsProgress;
};

export const findMinMaxVotes = (votesGroup: number[]): number[] => {
  const maxNum: number = Math.max(...votesGroup);
  const minNum: number = Math.min(...votesGroup);

  return [maxNum, minNum];
};

export const getVotesResults = (
  options: IPostFeed.IOptions[],
): IVotesLogic.IVotesResults => {
  const optionsVotes = getOptionsVotes(options);
  const totalVotes = calculateTotalVotes(optionsVotes);
  const mostAndLeastVoted = findMinMaxVotes(optionsVotes);
  const optionsPercentage = calculatePercentage(optionsVotes, totalVotes);

  return { mostAndLeastVoted, optionsPercentage };
};
