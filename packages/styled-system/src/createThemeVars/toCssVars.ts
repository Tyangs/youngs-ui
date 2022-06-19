import { Dict } from '@youngs-ui/utils';

import { WithCSSVar } from '../utils';
import { createThemeVars } from './createThemeVars';
import { flattenTokens } from './flattenToken';
import { extractSemanticTokens, extractTokens, omitVars } from './themeTokens';

/**
 * convert raw theme to with css vars theme
 * @param rawTheme raw theme object
 * @return with css vars theme object
 */
export const toCssVars = <T extends Dict>(rawTheme: T) => {
  const cleanTheme = omitVars(rawTheme);

  const tokens = extractTokens(cleanTheme);
  const semanticTokens = extractSemanticTokens(cleanTheme);

  const flatTokens = flattenTokens({
    tokens,
    semanticTokens,
  });

  const cssVarPrefix = cleanTheme?.config?.cssVarPrefix;

  const {
    /**
     * This is more like a dictionary of tokens users will type `green.500`,
     * and their equivalent css variable.
     */
    cssMap,
    /**
     * The extracted css variables will be stored here, and used in
     * the emotion's <Global/> component to attach variables to `:root`
     */
    cssVars,
  } = createThemeVars(flatTokens, { cssVarPrefix });

  const defaultCssVars: Dict = {
    '--youngs-ring-inset': 'var(--youngs-empty,/*!*/ /*!*/)',
    '--youngs-ring-offset-width': '0px',
    '--youngs-ring-offset-color': '#fff',
    '--youngs-ring-color': 'rgba(66, 153, 225, 0.6)',
    '--youngs-ring-offset-shadow': '0 0 #0000',
    '--youngs-ring-shadow': '0 0 #0000',
    '--youngs-space-x-reverse': '0',
    '--youngs-space-y-reverse': '0',
  };

  Object.assign(cleanTheme, {
    __cssVars: { ...defaultCssVars, ...cssVars },
    __cssMap: cssMap,
    // __breakpoints: analyzeBreakpoints(theme.breakpoints),
  });

  return cleanTheme as WithCSSVar<T>;
};
