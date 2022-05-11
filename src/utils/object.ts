import { Dict } from '../types';

export type PickResult<T extends Dict, K extends keyof T> = Record<K, T[K]>;

/**
 *  从一个对象中 pick 出 key 在 keys 数组中的对象
 * @param object key 为 `string`，value 为 `any` 的对象
 * @param keys 字符串数组
 * @returns key 在 keys 数组中的对象
 */
export const pick = <T extends Dict, K extends keyof T>(object: T, keys: K[]): PickResult<T, K> => {
  return keys.reduce<PickResult<T, K>>((pre, cur) => {
    if (cur in object) {
      pre[cur] = object[cur];
    }
    return pre;
  }, {} as PickResult<T, K>);
};
