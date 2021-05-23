export const calculateTotalVotes = (votesGroup: number[]): number =>
  votesGroup.reduce((accumulator, currentValue) => accumulator + currentValue);

export const calculatePercentage = (
  votes: number,
  totalVotes: number,
): number => {
  const maximumProgress = 100;
  const progress: number = (votes / totalVotes) * maximumProgress;

  return Math.round(progress);
};

export const findMinMaxVotes = (votesGroup: number[]): number[] => {
  const maxNum: number = Math.max(...votesGroup);
  const minNum: number = Math.min(...votesGroup);

  return [maxNum, minNum];
};
