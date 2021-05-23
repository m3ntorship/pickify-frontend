export const calcTotalVotes = (votesGroup: number[]): number =>
  votesGroup.reduce((accumulator, currentValue) => accumulator + currentValue);

export const calcProgress = (votes: number, totalVotes: number): number => {
  const maximumProfress = 100;
  const progress: number = (votes / totalVotes) * maximumProfress;

  return Math.round(progress);
};

export const findMinMaxVotes = (votesGroup: number[]): number[] => {
  const maxNum: number = Math.max(...votesGroup);
  const minNum: number = Math.min(...votesGroup);

  return [maxNum, minNum];
};
