/**
 * Solved Dec. 15, 2021
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hashMap = new Map();

    
    nums.forEach((e, i) => hashMap.set(e, i));
    for(let i=0; i<nums.length; i++) {
        if(hashMap.has(target - nums[i]) && hashMap.get(target - nums[i]) != i) {
            return [hashMap.get(target - nums[i]), i];
        }
    }
};