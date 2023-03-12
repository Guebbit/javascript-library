/**
 * Get array depth
 *
 * @param {*} check
 */
function getArrayDepth<T>(check: T | T[]) :number {
  return Array.isArray(check) ?
    1 + Math.max(0, ...check.map(getArrayDepth)) :
    0;
}

export default getArrayDepth;
