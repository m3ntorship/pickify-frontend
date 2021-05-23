declare namespace IVotingStats {
  export interface IProps {
    optionVotes: number[];
    votes: number;
    totalVotes: number;
    type: 'circular' | 'vertical';
  }
}

export { IVotingStats };
