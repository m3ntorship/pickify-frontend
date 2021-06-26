import type { IPostFeed } from '../../types/postFeed/IPostFeed';
import {
  calculatePercentage,
  calculateTotalVotes,
  findMinMaxVotes,
  getOptionsVotes,
  getVotesResults,
} from './votesLogic';

describe('Testing voting stats logic', () => {
  it('getOptionsVotes should return array of options votes', () => {
    const options: IPostFeed.IOptions[] = [
      { vote_count: 80, id: '1', body: 'option 1', media: [] },
      { vote_count: 70, id: '2', body: 'option 2', media: [] },
      { vote_count: 40, id: '3', body: 'option 3', media: [] },
      { vote_count: 60, id: '4', body: 'option 4', media: [] },
    ];
    const firstVote = 80;
    const secondVote = 70;
    const thirdVote = 40;
    const forthVote = 60;

    const optionsVotes: number[] = getOptionsVotes(options);

    const votesGroup: number[] = [firstVote, secondVote, thirdVote, forthVote];

    expect(optionsVotes).toEqual(votesGroup);
  });

  it('calculateTotalVotes should return number of total votes', () => {
    const firstVote = 80;
    const secondVote = 70;
    const thirdVote = 40;
    const fourthVote = 60;

    const votesGroup: number[] = [firstVote, secondVote, thirdVote, fourthVote];

    const totalVots: number = calculateTotalVotes(votesGroup);

    const result = 250;

    expect(totalVots).toEqual(result);
  });

  it('calculatePercentage should return number of progress', () => {
    const firstVote = 80;
    const secondVote = 20;
    const thirdVote = 50;
    const fourthVote = 50;

    const totalVotes = 200;

    const votesGroup: number[] = [firstVote, secondVote, thirdVote, fourthVote];

    const progress: number[] = calculatePercentage(votesGroup, totalVotes);

    const firstPercentage = 40;
    const secondPercentage = 10;
    const thirdPercentage = 25;
    const fourthPercentage = 25;

    const result = [
      firstPercentage,
      secondPercentage,
      thirdPercentage,
      fourthPercentage,
    ];

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

  it('getVotesResults should return [most and least votes] and array options percentage', () => {
    const options: IPostFeed.IOptions[] = [
      { vote_count: 80, id: '1', body: 'option 1', media: [] },
      { vote_count: 70, id: '2', body: 'option 2', media: [] },
      { vote_count: 40, id: '3', body: 'option 3', media: [] },
      { vote_count: 60, id: '4', body: 'option 4', media: [] },
    ];

    const mostVoted = 80;
    const leastVoted = 40;

    const firstPercentage = 32;
    const secondPercentage = 28;
    const thirdPercentage = 16;
    const fourthPercentage = 24;

    const { mostAndLeastVoted, optionsPercentage, totalVotes } =
      getVotesResults(options);

    const resultOne = [mostVoted, leastVoted];

    const resultTwo = [
      firstPercentage,
      secondPercentage,
      thirdPercentage,
      fourthPercentage,
    ];

    const resultThree = 250;

    expect(mostAndLeastVoted).toEqual(resultOne);
    expect(optionsPercentage).toEqual(resultTwo);
    expect(totalVotes).toEqual(resultThree);
  });
});
