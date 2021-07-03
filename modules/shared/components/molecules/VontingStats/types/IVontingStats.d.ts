declare namespace IVotingStats {
  export interface IProps {
    type: 'circular' | 'vertical';
    percentage: number;
    mostVoted: boolean;
    leastVoted: boolean;
    id: string;
    verticalMeterHeight?: number;
  }
}

export { IVotingStats };
