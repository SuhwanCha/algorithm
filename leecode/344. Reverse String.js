/**
 * Solved Dec. 16, 2021
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // s = s.reverse();
    // OR     
    for(let i=0; i<s.length / 2; i++) {
        let t = s[s.length - 1 - i];
        s[s.length - i - 1] = s[i];
        s[i] = t;
    }
};