import { Dict, pick } from '@youngs-ui/utils';

const tokens = [
  'colors',
  'borders',
  'borderWidths',
  'borderStyles',
  'fonts',
  'fontSizes',
  'fontWeights',
  'letterSpacings',
  'lineHeights',
  'radii',
  'space',
  'shadows',
  'sizes',
  'zIndices',
  'transition',
  'blur',
] as const;

export type ThemeScale = typeof tokens[number] | 'transition.duration' | 'transition.property' | 'transition.easing';

/**
 * extract tokens from theme
 * @param theme theme object
 * @returns token object
 */
export const extractTokens = (theme: Dict) => {
  const _tokens = (tokens as unknown) as string[];
  return pick(theme, _tokens);
};

/**
 * extract semantic tokens from theme
 * @param theme theme object
 * @returns semantic theme token object
 */
export const extractSemanticTokens = (theme: Dict<object | undefined>) => {
  return theme.semanticTokens;
};

/**
 * omit __sccMap, __cssVars, __breakpoints in raw theme
 * @param rawTheme raw theme object
 * @returns clean theme that don't include __sccMap, __cssVars, __breakpoints
 */
export const omitVars = (rawTheme: Dict) => {
  const { __cssMap, __cssVars, __breakpoints, ...cleanTheme } = rawTheme;
  return cleanTheme;
};
