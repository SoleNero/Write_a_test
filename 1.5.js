'use strict';
function twoSums(arr, int) {
  var result = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j=0; j<arr.length-1; j++){
      if (arr[j]+arr[j+1] === int){
        let idx1 = arr.indexOf(arr[j]);
        let idx2 = arr.indexOf(arr[j+1]);
        result = [idx1, idx2];
      }
    }
  }
  return result;
}

module.exports = twoSums;





