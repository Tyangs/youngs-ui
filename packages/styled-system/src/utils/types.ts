import { Dict } from '@youngs-ui/utils';

export type Union<T> = T | (string & {});

export type CssMap = Dict<{
  value: string | number;
  var: string;
  varRef: string;
}>;

export type WithCSSVar<T> = T & {
  __cssVars: Dict;
  __cssMap: CssMap;
  // __breakpoints: AnalyzeBreakpointsReturn;
};
