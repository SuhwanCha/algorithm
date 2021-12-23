/**
 * Solved Dec. 23, 2021
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    
    for(let i=0; i<=s2.length - s1.length; i++) {
        let arr = s2.slice(i, i+s1.length).split('');
        let map = {}
        arr.forEach((e) => map[e] ? map[e]++ : map[e] = 1);
        let flag = true;
        for(let j=0; j<s1.length; j++) {
            if(!map[s1[j]]) { 
                flag = false;
                break;
            }
            map[s1[j]]--;   
        }
        
        if(flag) {
            return true;
        }
    }
    return false;
};