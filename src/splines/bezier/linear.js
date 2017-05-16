/**
 * Linear bezier.
 *
 * @memberof splines.bezier
 *
 * @param {[number, number]} array - The bezier points.
 * @param {number} t - A point along the bezier. (0-1)
 * @returns {number}
 */
export function linear(array, t) {
  const ut = 1 - t;
  return array[0] * ut + array[1] * t;
}
