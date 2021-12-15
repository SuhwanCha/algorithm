/**
 * Solved Dec. 15, 2021
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let deleteCount = 0;
    for(let i=0; i<nums.length - deleteCount; i++) {
        if(nums[i] == 0) {
            nums.splice(i, 1);
            i--;
            deleteCount++;
            nums.push(0);
        }
    }
};