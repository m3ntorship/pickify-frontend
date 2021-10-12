declare namespace IImagePollUncovered {
  export interface IProps {
    type: 'circular' | 'vertical';
    percentage: number;
    mostVoted?: boolean;
    leastVoted?: boolean;
    id: string;
    verticalMeterHeight?: number;
    optionBody?: string;
    isOptionChecked?: boolean;
  }
}

export { IImagePollUncovered };
