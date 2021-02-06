/**
 * Function to define a string in a pattern to be used in all search inputs.
 * @param {String} str term to search.
 */
export function toSearchableString(str) {
  return str ? str.trim().toLowerCase() : '';
}

/**
* Helper function to sort arrays of numbers.
* @param {Number} a Number A.
* @param {Number} b Number B.
*/
export function sortNumber(a, b) {
  return a - b;
}

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
  });

/**
* sort array by key
* @param {array} array.
* @param {string} key.
*/
export const sortByKeyAsc = (array, key) => array.sort(
  function (a, b) {
    const x = a[key];
    const y = b[key];
    return ((x > y) ? -1 : ((x > y) ? 1 : 0));
  });

/**
* Debounce implementation
* @param {*} func 
* @param {*} wait 
*/
export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

