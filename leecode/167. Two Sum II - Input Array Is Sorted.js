/**
 * Solved Dec. 15, 2021
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
        var hashMap = new Map();
    numbers.forEach((e, i) => hashMap.set(e, i));
    for(let i=0; i<numbers.length; i++) {
        if(hashMap.has(target - numbers[i]) && hashMap.get(target - numbers[i]) != i) {
            return [i + 1, hashMap.get(target - numbers[i]) + 1];
        }
    }

};