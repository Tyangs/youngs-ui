import { flatten, fromEntries } from '@youngs-ui/utils';

export type PlainToken = { isSemantic: false; value: string | number };
export type SemanticToken = { isSemantic: true; value: string | number };

export type FlatToken = PlainToken | SemanticToken;

export type FlattenTokensParam = {
  tokens?: object;
  semanticTokens?: object;
};

export const flattenTokens = <T extends FlattenTokensParam>({ tokens, semanticTokens }: T) => {
  const tokenEntries = Object.entries(tokens ? flatten(tokens) : {}).map(([token, value]) => {
    const enhancedToken = {
      isSemantic: false,
      value,
    };
    return [token, enhancedToken] as [string, PlainToken];
  });
  const semanticTokenEntries = Object.entries(semanticTokens ? flatten(semanticTokens) : {}).map(([token, value]) => {
    const enhancedToken = {
      isSemantic: true,
      value,
    };
    return [token, enhancedToken] as [string, SemanticToken];
  });

  return fromEntries<FlatToken>([...tokenEntries, ...semanticTokenEntries]);
};
