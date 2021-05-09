import { giveMeFive } from './Button';

test('generateAttributeIds', () => {
  const five = 5;
  expect(giveMeFive()).toBe(five);
});
