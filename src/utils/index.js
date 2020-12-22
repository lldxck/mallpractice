/**
 * better-scroll刷新频繁的防抖动函数(短时间多次触发同一事件，只执行最后一次或者执行最开始的一次，中间不执行)
 * @param {Function} func 执行的方法
 * @param {number} delay 延迟等待的时间毫秒
 */
export function debounce(func, delay) {
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
