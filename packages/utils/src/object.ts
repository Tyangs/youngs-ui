import { Dict } from './types';

export { default as mergewith } from 'lodash.mergewith';

export type PickResult<T extends Dict, K extends keyof T> = Record<K, T[K]>;

/**
 * pick object that kay in keys
 * @param object will be picked object
 * @param keys key array
 * @returns the object that key in keys
 */
export const pick = <T extends Dict, K extends keyof T>(object: T, keys: K[]): PickResult<T, K> =>
  keys.reduce<PickResult<T, K>>((pre, cur) => {
    if (cur in object) {
      pre[cur] = object[cur];
    }
    return pre;
  }, {} as PickResult<T, K>);

export const fromEntries = <T extends unknown>(entries: [string, any][]) =>
  entries.reduce<Record<string, T>>(
    (pre, [key, value]) => ({
      ...pre,
      [key]: value,
    }),
    {}
  );

export const objectKeys = <T extends Dict>(obj: T) => (Object.keys(obj) as unknown) as (keyof T)[];
