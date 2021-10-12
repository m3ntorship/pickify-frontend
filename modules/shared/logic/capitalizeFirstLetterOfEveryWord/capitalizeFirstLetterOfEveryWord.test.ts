import { capitalizeFirstLetterOfEveryWord } from './capitalizeFirstLetterOfEveryWord';

describe('Capitalize First Letter Of Every Word', () => {
  it('Should return Omar Gamal', () => {
    const results = capitalizeFirstLetterOfEveryWord('omar gamal');
    expect(results).toEqual('Omar Gamal');
  });
  it('Should return Omar Gamal if its already passed as capitalized', () => {
    const results = capitalizeFirstLetterOfEveryWord('Omar Gamal');
    expect(results).toEqual('Omar Gamal');
  });
});
