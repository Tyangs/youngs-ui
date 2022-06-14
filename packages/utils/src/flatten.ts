import { isArray, isObject } from './assertion';
import { Dict } from './types';

/**
 * flatten object or array with maxDepth
 * @param values will flattened object or array
 * @param maxDepth max recursion time, default is `Infinity`
 * @returns the flattened object
 */
export const flatten = (values: Dict, maxDepth = Infinity) => {
  // exit recursion when values is not object, or not array, or recursive maxDepth time
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
