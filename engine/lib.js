/**
 * makes a generic element id unique by adding a suffix.
 * @param {String} name 
 */
export function generateUEID(name) {
    // The randomly generated string will be 8 characters of hex 
    const LOWER_BOUND = 16**8;
    const UPPER_BOUND = (16**9)-1;

    const generated = Math.random() * (UPPER_BOUND - LOWER_BOUND) + LOWER_BOUND;
    return `${name}-${generated.toString(16)}`;
}