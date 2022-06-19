export type Dict<T = any> = Record<string, T>;

export type AnyFunction<T = any> = (...args: T[]) => any;
