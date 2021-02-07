// Global
import { compareDesc } from 'date-fns';

/**
 * Function to define a string in a pattern to be used in all search inputs.
 * @param {String} str term to search.
 */
export function toSearchableString(str) {
  return str ? str.trim().toLowerCase() : '';
}

/**
* sort array by key
* @param {array} array.
* @param {string} key.
*/
export const sortByDateDesc = (array, key) => array.sort(
  function (a, b) {
    return compareDesc(new Date(a[key]), new Date(b[key]));
  }
);

/**
* sort array by key
* @param {array} array.
* @param {string} key.
*/
export const sortByKeyDesc = (array, key) => array.sort(
  function (a, b) {
    const x = a[key];
    const y = b[key];
    return ((x > y) ? -1 : ((x < y) ? 1 : 0));
  }
);
