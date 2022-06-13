/*
 * Provides util functions for generating css calc.
 */

import { isObject } from '@youngs-ui/utils';

export type Reference = { reference: string };

export type Operand = string | number | Reference;

export type Operator = '+' | '-' | '*' | '/';

/**
 * resolve operand to string
 * @param operand
 * @returns the resolved operand string
 */
const resolveOperand = (operand: Operand): string => {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
};

/**
 * combining `operator` and `operands` to be expression string
 * @param operator css calc operator
 * @param operands operand array
 * @returns expression string that will expressed by calc
 */
const getExpression = (operator: Operator, ...operands: Array<Operand>) =>
  operands
    .map(resolveOperand)
    .join(` ${operator} `)
    .replace(/calc/g, '');

/**
 * get css calc add expression
 * @param operands operand array
 * @returns css calc add expression
 */
const add = (...operands: Array<Operand>) => `calc(${getExpression('+', ...operands)})`;

/**
 * get css calc subtract expression
 * @param operands operand array
 * @returns css calc subtract expression
 */
const subtract = (...operands: Array<Operand>) => `calc(${getExpression('-', ...operands)})`;

/**
 * get css calc multiply expression
 * @param operands operand array
 * @returns css calc multiply expression
 */
const multiply = (...operands: Array<Operand>) => `calc(${getExpression('*', ...operands)})`;

/**
 * get css calc divide expression
 * @param operands operand array
 * @returns css calc divide expression
 */
const divide = (...operands: Array<Operand>) => `calc(${getExpression('/', ...operands)})`;

/**
 * get negate value
 * @param operand operand
 * @returns operand negate value
 */
const negate = (operand: Operand) => {
  const value = resolveOperand(operand);

  if (!Number.isNaN(value)) {
    return value.startsWith('-') ? value.slice(1) : `-${value}`;
  }

  return multiply(value, -1);
};

interface CalcChain {
  add: (...operands: Array<Operand>) => CalcChain;
  subtract: (...operands: Array<Operand>) => CalcChain;
  multiply: (...operands: Array<Operand>) => CalcChain;
  divide: (...operands: Array<Operand>) => CalcChain;
  negate: () => CalcChain;
  toString: () => string;
}

/**
 * an object that provide calc function and calc chain function
 */
export const calc = Object.assign(
  (x: Operand): CalcChain => ({
    add: (...operands) => calc(add(x, ...operands)),
    subtract: (...operands) => calc(subtract(x, ...operands)),
    multiply: (...operands) => calc(multiply(x, ...operands)),
    divide: (...operands) => calc(divide(x, ...operands)),
    negate: () => calc(negate(x)),
    toString: () => x.toString(),
  }),
  {
    add,
    subtract,
    multiply,
    divide,
    negate,
  }
);
