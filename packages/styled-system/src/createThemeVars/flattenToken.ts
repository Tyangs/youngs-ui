import { flatten } from '@youngs-ui/utils';

import { Union } from '../utils';

export type SemanticValue<Conditions extends string, Token extends string = string> =
  | Union<Token>
  | Partial<Record<'default' | Conditions, Union<Token>>>;

export type PlainToken = { isSemantic: false; value: string | number };
export type SemanticToken = { isSemantic: true; value: string | number | SemanticValue<string> };

export type FlatToken = PlainToken | SemanticToken;
export type FlatTokens = Record<string, FlatToken>;

export type FlatTokensParam = {
  tokens?: object;
  semanticTokens?: object;
};

export const flattenTokens = <T extends FlatTokensParam>({ tokens, semanticTokens }: T): FlatTokens => {
  const tokenEntries = Object.entries(tokens ? flatten(tokens) : {}).reduce<Record<string, PlainToken>>(
    (pre, [token, value]) => {
      const enhancedToken: PlainToken = {
        isSemantic: false,
        value,
      };
      pre[token] = enhancedToken;
      return pre;
    },
    {}
  );

  const semanticTokenEntries = Object.entries(semanticTokens ? flatten(semanticTokens) : {}).reduce<
    Record<string, SemanticToken>
  >((pre, [token, value]) => {
    const enhancedToken: SemanticToken = {
      isSemantic: true,
      value,
    };
    pre[token] = enhancedToken;
    return pre;
  }, {});

  return { ...tokenEntries, ...semanticTokenEntries };
};
