'use strict';

let numbers =[1, 2, 3, 4, 5, 6, 7];
let myNumber = 13;

function targetValue(arr, int) {
    let result =[];
    for (var i = 0; i < arr.length; i++) {
      for (let j = arr.length; j > 0; j--) {
        if (arr[i] + arr[j] === int) {
          result.push(arr[i]);
        }
      }
    }
    return result;
  }

  console.log(targetValue(numbers, myNumber));

module.exports = targetValue;
