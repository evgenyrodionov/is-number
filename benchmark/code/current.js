'use strict';

module.exports = function(arr) {
  var len = arr.length, isNum;
  while (len--) {
    var n = arr[len];
    isNum = (!!(+n) && !Array.isArray(n)) && isFinite(n) || n === '0'|| n === 0;
  }
  return isNum;
};
