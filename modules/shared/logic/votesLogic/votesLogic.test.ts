import { calcProgress, calcTotalVotes, findMinMaxVotes } from './votesLogic';

const firstVote = 80;
const secondVote = 70;
const thirdVote = 40;
const forthVote = 60;

describe('Testing voting stats logic', () => {
  it('calcTotalVotes should return number of total votes', () => {
    const votesGroup: number[] = [firstVote, secondVote, thirdVote, forthVote];

    const totalVots: number = calcTotalVotes(votesGroup);

    const results = 250;

    expect(totalVots).toEqual(results);
  });

  it('calcProgress should return number of progress', () => {
    const votes = 50;
    const totalVotes = 200;

    const progress: number = calcProgress(votes, totalVotes);

    const results = 25;

    expect(progress).toEqual(results);
  });

  it('findMinMaxVotes should return array of max and min votes', () => {
    const firstIndex = 0;
    const secondIndex = 1;

    const votesGroup: number[] = [firstVote, secondVote, thirdVote, forthVote];
    const minMaxVotes: number[] = findMinMaxVotes(votesGroup);

    const resultOne = 80;
    const resultTwo = 40;

    expect(minMaxVotes[firstIndex]).toEqual(resultOne);
    expect(minMaxVotes[secondIndex]).toEqual(resultTwo);
  });
});
