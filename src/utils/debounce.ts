/**
 * Debounce helper utility.
 * @param cb callback function
 * @param wait debounce delay
 * @returns debounced function
 */
function debounce<T extends Function>(cb: T, wait = 20) {
  let h: NodeJS.Timeout;

  let callable = (...args: any) => {
    clearTimeout(h);
    h = setTimeout(() => cb(...args), wait);
  };
  return <T>(<any>callable);
}

export default debounce;
