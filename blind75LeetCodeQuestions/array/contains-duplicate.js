/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const check = new Set(nums);
    return nums.length !== check.size;
};

const test = containsDuplicate([1, 2, 3, 4, 5, 6, 7, 1]);

/*
 -- Set --
 number of elements in set is 'count'
 array can be added into constructor 
*/
