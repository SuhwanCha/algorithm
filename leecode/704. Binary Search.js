/**
 * Solved Dec.13, 2021
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let idx = parseInt((end + start) / 2);
        
    while(start <= end) {
        if(nums[idx] == target) {
            return idx;
        }
        else if(nums[idx] > target) {
            end = idx - 1;
        }else if(nums[idx] < target) {
            start = idx + 1;
        }
        idx = parseInt((end + start) / 2);
    }
    return -1;
};