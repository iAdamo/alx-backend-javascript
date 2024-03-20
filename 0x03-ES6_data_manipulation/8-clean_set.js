/**
 * returns a string of all the set values that start with a specific string (startString).
 * @param {*Set} set of array values
 * @param {*String} startString to filter the set values
 * @returns a string string contains all the values of the set separated by -.
 */
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';
  return Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length))
    .join('-');
}
