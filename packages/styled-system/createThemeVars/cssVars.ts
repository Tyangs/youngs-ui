/**
 * replace white space to custom string(second param)
 * @param value will be replaced string
 * @param replaceValue string that to replace white space, default is `-`
 * @returns the replaced result string
 */
export const replaceWhiteSpace = (value: string, replaceValue = '-'): string => {
  return value.replace(/\s+/g, replaceValue);
};

/**
 * add prefix to a string
 * @param value the string to be prefixed with
 * @param prefix prefix string, default is empty string
 * @returns the added prefixed result string
 */
export const addPrefix = (value: string, prefix = ''): string => {
  return [prefix, value].filter(Boolean).join('-');
};

/**
 * get css variable string
 * @param value variable string
 * @param prefix prefix, default is empty string
 * @returns css variable string that with prefix
 */
export const getVariable = (value: string, prefix = ''): string => {
  return `--${addPrefix(value, prefix)}`;
};

/**
 * get css reference
 * @param name css variable string
 * @returns css reference
 */
export const getReference = (name: string): string => {
  return `var(${getVariable(name)})`;
};

/**
 * get css variable object
 * @param value css variable string
 * @param cssVarPrefix css variable prefix string
 * @returns css variable object
 */
export const getCssVar = (value: string, cssVarPrefix?: string): CssVar => {
  const cssVariable = getVariable(value, cssVarPrefix);

  const cssReference = getReference(cssVariable);

  return {
    variable: cssVariable,
    reference: cssReference,
  };
};

export type CssVar = {
  variable: string;
  reference: string;
};
