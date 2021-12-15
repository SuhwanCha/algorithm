/**
 * Solved Dec. 14, 2021
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
   return nums.sort(function(a,b){
      return Math.abs(a) < Math.abs(b) ? -1 : 1;
   }).map(x => x*x);
};