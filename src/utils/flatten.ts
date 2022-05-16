import { Dict } from '@/types';

import { isArray, isObject } from './assertion';

export const flatten = (values: Dict, maxDepth = Infinity) => {
  // 当 values 为非对象或数组，或者已递归了 maxDepth 次，则退出递归
  if ((!isObject(values) && !isArray(values)) || !maxDepth) {
    return values;
  }

  return Object.entries(values).reduce<Dict>((result, [key, value]) => {
    if (isObject(value) || isArray(value)) {
      Object.entries(flatten(value, maxDepth - 1)).forEach(([childKey, childValue]) => {
        result[`${key}.${childKey}`] = childValue;
      });
    } else {
      result[key] = value;
    }
    return result;
  }, {});
};
