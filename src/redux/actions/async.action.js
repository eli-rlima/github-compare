/**
 * Function to wrap the pending state type.
 * @param {String} type The state type.
 * @param {Object} payload The payload to be read by the reducer.
 */
export function pending(type, payload = null) {
  return {
    type: `${type}_PENDING`,
    payload,
  };
}

/**
* Function to wrap the rejected state type.
* @param {String} type The state type.
* @param {Object} payload The payload to be read by the reducer.
*/
export function rejected(type, payload = null) {
  return {
    type: `${type}_REJECTED`,
    payload,
  };
}

/**
* Function to wrap the fulfilled state type.
* @param {String} type The state type.
* @param {Object} payload The payload to be read by the reducer.
*/
export function fulfilled(type, payload = null) {
  return {
    type: `${type}_FULFILLED`,
    payload,
  };
}
