import { Dict } from '@/types';
export interface CreateThemeVarsOptions {
  cssVarPrefix?: string;
}

export interface ThemeVars {
  cssVar: Dict;
}
