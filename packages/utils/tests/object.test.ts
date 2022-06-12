import { fromEntries, pick } from '../src/object';

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

test('should return an object that type is Record<string, T> with entries', () => {
  const entries: [string, any][] = [
    ['color.red', { 500: '#ff0000' }],
    ['color.white', { 500: '#ffffff' }],
    ['space.0', 0],
    ['space.1', 1],
  ];
  const expectResult = {
    'color.red': { '500': '#ff0000' },
    'color.white': { '500': '#ffffff' },
    'space.0': 0,
    'space.1': 1,
  };

  const result = fromEntries(entries);
  expect(result).toEqual(expectResult);
});
