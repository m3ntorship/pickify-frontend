export interface ITrendingQuestion {
  id: number;
  type: 'Image Poll' | 'Mini Survey' | 'Text Poll';
  text: string;
}

export const dummyData: ITrendingQuestion[] = [
  {
    id: 0,
    type: 'Image Poll',
    text: 'Adel Shakal Vs Obama Elmasry',
  },
  {
    id: 1,
    type: 'Image Poll',
    text: 'Which dress is better?',
  },
  {
    id: 2,
    type: 'Text Poll',
    text: 'What are 2021 best programming languages?',
  },
  {
    id: 3,
    type: 'Image Poll',
    text: 'Help me with this income question',
  },
  {
    id: 4,
    type: 'Mini Survey',
    text: 'Which dress is better?',
  },
  {
    id: 5,
    type: 'Image Poll',
    text: 'Which T-shirt would you pick?',
  },
];
