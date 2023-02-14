/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
};

const res = twoSum([3, 3, 2, 1], 3);

// Time complexity is O(n).
/*
var twoSum = function(nums, target) {
    let map = new Map();
    
    for(let i = 0; i < nums.length; i ++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
	return [];
};
*/

// Time complexity is O(n^2).
/*
var twoSum = function (nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        const num = target - nums[i];
        for (let j = i + 1; j <= nums.length; j++) {
            if (nums[j] === num) {
                return [i, j];
            }
        }
    }
    return [];
};
*/
