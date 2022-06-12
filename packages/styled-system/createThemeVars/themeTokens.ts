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

export const extractTokens = (theme: Dict) => {
  const _tokens = (tokens as unknown) as string[];
  return pick(theme, _tokens);
};

export const extractSemanticTokens = (theme: Dict<object | undefined>) => {
  return theme.semanticTokens;
};

export const omitVars = (rawTheme: Dict) => {
  const { __cssMap, __cssVars, __breakpoints, ...cleanTheme } = rawTheme;
  return cleanTheme;
};
