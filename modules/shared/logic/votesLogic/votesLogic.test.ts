import {
  calculatePercentage,
  calculateTotalVotes,
  findMinMaxVotes,
} from './votesLogic';

describe('Testing voting stats logic', () => {
  it('calculateTotalVotes should return number of total votes', () => {
    const firstVote = 80;
    const secondVote = 70;
    const thirdVote = 40;
    const forthVote = 60;

    const votesGroup: number[] = [firstVote, secondVote, thirdVote, forthVote];

    const totalVots: number = calculateTotalVotes(votesGroup);

    const result = 250;

    expect(totalVots).toEqual(result);
  });

  it('calculatePercentage should return number of progress', () => {
    const votes = 50;
    const totalVotes = 200;

    const progress: number = calculatePercentage(votes, totalVotes);

    const result = 25;

    expect(progress).toEqual(result);
  });

  it('findMinMaxVotes should return array of max and min votes', () => {
    const firstVote = 80;
    const secondVote = 70;
    const thirdVote = 40;
    const forthVote = 60;

    const votesGroup = [firstVote, secondVote, thirdVote, forthVote];

    const [maxVotes, minVotes] = findMinMaxVotes(votesGroup);

    expect(minVotes).toEqual(thirdVote);
    expect(maxVotes).toEqual(firstVote);
  });
});
