/**
 * Converts a NodeList to an Array.
 *
 * @memberof array
 *
 * @param {NodeList} nodeList - A NodeList.
 *
 * @returns {Array}
 *
 * @example
 * // => [div, div, …]
 * toArray(document.querySelectorAll('div'));
 */
export function nodeListToArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
}
