declare namespace IVotesLogic {
  export interface IVotesResults {
    mostAndLeastVoted: number[];
    optionsPercentage: number[];
    totalVotes: number;
  }
}

export { IVotesLogic };
