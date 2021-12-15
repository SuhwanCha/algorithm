/**
 * Solved Dec. 14, 2021
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(k > nums.length) k = k % nums.length;
    var temp = nums.splice(-k);
    nums.splice(0,0, ...temp);
    return nums;
};