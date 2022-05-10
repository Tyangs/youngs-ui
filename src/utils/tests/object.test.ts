import { pick } from '../object';

test('should return property in object with specified keys', () => {
  const object = {
    a: 'a',
    b: 'b',
    c: 'c',
  };
  const expectResult = {
    a: 'a',
    c: 'c',
  };
  expect(pick(object, ['a', 'c'])).toEqual(expectResult);
});
