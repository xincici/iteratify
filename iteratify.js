const toString = arg => Object.prototype.toString.call(arg).slice(8, -1);

const defaultOption = {
  labelKey: 'key',
  labelValue: 'value',
};

function iteratify(obj, options = {}) {
  if (toString(obj) !== 'Object') throw new TypeError('need an object');
  if (obj[Symbol.iterator]) return obj;
  options = Object.assign({}, defaultOption, options);
  Object.defineProperty(obj, Symbol.iterator, {
    value: function() {
      const keys = Object.keys(obj);
      const len = keys.length;
      let i = -1;
      return {
        next: function() {
          i++;
          const done = i >= len;
          const key = keys[i];
          return {
            value: done ? void 0 :  {
              [options.labelKey]: key,
              [options.labelValue]: obj[key],
            },
            done: done 
          }
        }
      }
    },
    enumerable: false,
    configurable: false,
    writable: false
  });
  return obj;
}

iteratify.iteratify = iteratify;

module.exports = iteratify;
