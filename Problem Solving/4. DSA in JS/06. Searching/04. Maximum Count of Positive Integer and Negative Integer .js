// Maximum Count of Positive Integer and Negative Integer ::
// Using Binary Search
/*
Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
Note that 0 is neither positive nor negative.



Example 1:
Input: nums = [-2,-1,-1,1,2,3]
Output: 3
Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.


Example 2:
Input: nums = [-3,-2,-1,0,0,1,2]
Output: 3
Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.


Example 3:
Input: nums = [5,20,66,1314]
Output: 4
Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.
*/

// Using Binary Search

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let negCount = countNegatives(nums);
    let posCount = countPositives(nums);
    return Math.max(negCount, posCount);
};

// Helper to count negatives using binary search
function countNegatives(nums) {
    let low = 0;
    let high = nums.length;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] < 0) {
            low = mid + 1; // Search right for more negatives
        } else {
            high = mid; // Search left for the first non-negative
        }
    }
    return low; // low is the count of negatives (first index where nums[i] >= 0)
}

// Helper to count positives using binary search
function countPositives(nums) {
    let low = 0;
    let high = nums.length;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] <= 0) {
            low = mid + 1; // Search right for positives
        } else {
            high = mid; // Search left for the first positive
        }
    }
    return nums.length - low; // positives = total length - first positive index
}

console.log(maximumCount([-2, -1, -1, 1, 2, 3])); // 3
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])); // 3
console.log(maximumCount([5, 20, 66, 1314])); // 4



// lets make it more easy to do


/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let negCount = countNegatives(nums);
    let posCount = countPositives(nums);
    return (negCount > posCount) ? negCount : posCount; // manual max
};

// Helper to get length manually (no .length) ::
function getLength(arr) {
    let count = 0;
    while (arr[count] !== undefined) {
        count++;
    }
    return count;
}

// Helper to count negatives using binary search ::
function countNegatives(nums) {
    let n = getLength(nums);
    let low = 0;
    let high = n;

    while (low < high) {
        let mid = ((low + high) / 2) | 0; // manual floor
        if (nums[mid] < 0) {
            low = mid + 1; // go right
        } else {
            high = mid; // go left
        }
    }
    return low; // negatives count
}

// Helper to count positives using binary search ::
function countPositives(nums) {
    let n = getLength(nums);
    let low = 0;
    let high = n;

    while (low < high) {
        let mid = ((low + high) / 2) | 0; // manual floor
        if (nums[mid] <= 0) {
            low = mid + 1; // go right
        } else {
            high = mid; // go left
        }
    }
    return n - low; // total - index of first positive
}
console.log(maximumCount([-2, -1, -1, 1, 2, 3]));    // 3
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])); // 3
console.log(maximumCount([5, 20, 66, 1314]));        // 4
