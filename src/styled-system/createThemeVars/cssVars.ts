/**
 * 将字符串中的空格替换成其他字符串
 * @param value 需要被替换空格的字符串值
 * @param replaceValue 替换的字符串值，默认为 '-'
 * @returns 将 value 中空格替换成 replaceValue 的结果字符串
 */
export const replaceWhiteSpace = (value: string, replaceValue = '-'): string => {
  return value.replace(/\s+/g, replaceValue);
};

/**
 * 给字符串添加前缀字符串
 * @param value 需要添加前缀的字符串值
 * @param prefix 前缀，默认为 ''
 * @returns 添加完前缀的结果字符串
 */
export const addPrefix = (value: string, prefix = ''): string => {
  return [prefix, value].filter(Boolean).join('-');
};

/**
 * 得到 css 变量字符串
 * @param value 变量字符串
 * @param prefix 前缀，默认为 ''
 * @returns 得到含有前缀的 css 变量字符串
 */
export const getVariable = (value: string, prefix = ''): string => {
  return `--${addPrefix(value, prefix)}`;
};

/**
 * 得到 css reference
 * @param name css 变量字符串
 * @returns css reference
 */
export const getReference = (name: string): string => {
  return `var(${getVariable(name)})`;
};

/**
 * 得到 css 变量对象
 * @param name css 变量字符串
 * @param cssVarPrefix css 变量前缀
 * @returns css 变量对象
 */
export const getCssVar = (name: string, cssVarPrefix?: string): CssVar => {
  const cssVariable = getVariable(name, cssVarPrefix);

  return {
    variable: cssVariable,
    reference: getReference(cssVariable),
  };
};

export type CssVar = {
  variable: string;
  reference: string;
};
