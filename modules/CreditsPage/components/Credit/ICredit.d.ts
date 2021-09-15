declare namespace ICredit {
  export interface ICreditData {
    devId: string;
    developerName: string;
    developerImage: string;
    developerTitle: string;
    developerRank: string;
    githubAccount?: string;
    linkedinAccount: string;
    feedback: string;
  }
}

export { ICredit };
