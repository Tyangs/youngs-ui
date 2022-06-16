import { Dict } from '@youngs-ui/utils';

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

  // TODO: need to complete it
};
