/**
 * Solved Dec. 13, 2021
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid = parseInt((start + end) / 2);
    
    if(nums[nums.length - 1] < target) {
        return end + 1;
    }
    
    while(start < end) {
        console.log(start, end, mid, nums[mid]);
        if(nums[mid] < target) {
            start = mid + 1;
        }else {
            end = mid;
        }
        mid = parseInt((start + end) / 2);
    }
    return mid;
};