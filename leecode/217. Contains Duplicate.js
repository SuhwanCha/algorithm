/**
 * Solved Jan. 4, 2022
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(let i=0; i<nums.length; i++) {
        if(nums.slice(i+1, nums.length).includes(nums[i])) return true;
    }
    return false;
};