/**
 * Solved Dec. 23, 2021
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let arr = [];
    let max = 0;
    for(let i=0; i<s.length; i++) {
        if(!arr.includes(s[i])) {
                arr.push(s[i]);
        }else {
                console.log(arr);
                if(arr.length > max) max = arr.length;
                arr.splice(0, arr.indexOf(s[i]) + 1);
                arr.push(s[i]);
        }
    }
    if(arr.length > max) max = arr.length;
    console.log(arr);
    return max;
};