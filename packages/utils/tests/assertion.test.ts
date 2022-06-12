import { isArray, isObject } from '../src/assertion';

test('is array', () => {
  expect(isArray([])).toBeTruthy();
  expect(isArray({})).toBeFalsy();
});

test('is object', () => {
  expect(isObject({})).toBeTruthy();
  expect(isObject([])).toBeFalsy();
});
