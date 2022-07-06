/**
 * Returns a list of unique values in a list or range.
 *
 * Category: Lookup and reference
 *
 * @returns
 */
export function UNIQUE(...args: any[]): any[]
export function ARGS2ARRAY(...args: any[]): any
/**
 * Formula.js only
 *
 * @param {*} context
 * @param {*} reference
 * @returns
 */
export function REFERENCE(context: any, reference: any, ...args: any[]): any
/**
 * Formula.js only
 *
 * @param {*} array
 * @param {*} separator
 * @returns
 */
export function JOIN(array: any, separator: any): any
/**
 * Formula.js only
 *
 * @returns
 */
export function NUMBERS(...args: any[]): any
export const FLATTEN: typeof utils.flatten
import * as utils from './utils/common.js'
