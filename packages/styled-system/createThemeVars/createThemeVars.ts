import { Dict } from '@youngs-ui/utils';

import { getCssVar } from './cssVars';
import { FlatTokens } from './flattenToken';

export interface CreateThemeVarsOptions {
  cssVarPrefix?: string;
}

export interface ThemeVars {
  cssVar: Dict;
}

/**
 * convert token name to css variable
 * @param token token name
 * @param prefix css var prefix string
 * @return css variable
 * @example
 * tokenToCssVar('color.primary.500', 'youngs')
 * => {
 *  variable: '--youngs-color-primary-500',
 *  reference: 'var(--youngs-color-primary-500)'
 * }
 */
export const tokenToCssVar = (token: string | number, prefix?: string) => {
  const tokenName = String(token).replace(/\./g, '-');
  return getCssVar(tokenName, prefix);
};

// TODO: need to complete it
export const createThemeVars = (flatTokens: FlatTokens, options: CreateThemeVarsOptions) => {};
