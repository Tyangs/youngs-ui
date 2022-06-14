import { flatten, fromEntries } from '@youngs-ui/utils';

export type PlainToken = { isSemantic: false; value: string | number };
export type SemanticToken = { isSemantic: true; value: string | number };

export type FlatToken = PlainToken | SemanticToken;

export type FlattenTokensParam = {
  tokens?: object;
  semanticTokens?: object;
};

export const flattenTokens = <T extends FlattenTokensParam>({
  tokens,
  semanticTokens,
}: T): Record<string, FlatToken> => {
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
