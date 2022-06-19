import { Dict } from '@youngs-ui/utils';
import { mergewith } from '@youngs-ui/utils';
import { isObject } from '@youngs-ui/utils/src/assertion';

import { CssMap } from '../utils/types';
import { pseudoSelectors } from './../pseudos';
import { calc, Operand } from './calc';
import { getCssVar } from './cssVars';
import { FlatTokens, PlainToken } from './flattenToken';

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

export const createThemeVars = (flatTokens: FlatTokens, options: CreateThemeVarsOptions) => {
  let cssVars: Dict = {};
  const cssMap: CssMap = {};

  const flatTokenEntries = Object.entries(flatTokens);

  for (let [token, tokenValue] of flatTokenEntries) {
    const { isSemantic, value } = tokenValue;
    const { variable, reference } = tokenToCssVar(token, options.cssVarPrefix);

    if (!isSemantic) {
      if (token.startsWith('space')) {
        const keys = token.split('.');
        const [firstKey, ...referenceKeys] = keys;
        /** @example space.-4 */
        const negativeLookupKey = `${firstKey}.-${referenceKeys.join('.')}`;
        /** @example -4 */
        const negativeValue = calc.negate(value as PlainToken['value']);
        /** @example -var(--youngs-space-4)  */
        const negatedReference = calc.negate(reference);
        cssMap[negativeLookupKey] = {
          value: negativeValue,
          var: variable,
          varRef: negatedReference,
        };
      }

      cssVars[variable] = value;
      cssMap[token] = {
        value: value as PlainToken['value'],
        var: variable,
        varRef: reference,
      };
      continue;
    }

    const lookupToken = (conditionValue: string | number) => {
      const scale = String(token).split('.')[0];
      const withScale = [scale, conditionValue].join('.');
      /** @example flatTokens['space.4'] === '16px' */
      const resolvedTokenValue = flatTokens[withScale];
      if (!resolvedTokenValue) return String(conditionValue);
      const { reference } = tokenToCssVar(withScale, options?.cssVarPrefix);
      return reference;
    };

    const normalizedValue = isObject(value) ? value : { default: value };

    const currentCssVars = Object.entries(normalizedValue).reduce<Dict>((pre, [conditionAlias, conditionValue]) => {
      const maybeReference = lookupToken(conditionValue);
      if (conditionAlias === 'default') {
        pre[variable] = maybeReference;
        return pre;
      }
      /** @example { _dark: "#fff" } => { '.chakra-ui-dark': "#fff" } */
      const conditionSelector = (pseudoSelectors as any)?.[conditionAlias] ?? conditionAlias;
      pre[conditionSelector] = { [variable]: maybeReference };

      return pre;
    }, {});

    cssVars = mergewith(cssVars, currentCssVars);

    cssMap[token] = {
      value: reference,
      var: variable,
      varRef: reference,
    };
  }

  return {
    cssVars,
    cssMap,
  };
};
