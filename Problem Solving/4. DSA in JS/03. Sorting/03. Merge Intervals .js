/*
Merge Intervals
- Given an array of intervals where intervals[i] = [starti, endi],
- merge all overlapping intervals,
- and return an array of the non-overlapping intervals that cover all the intervals in the input.


Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

----
1 2 3 4 5 6 7 8 9 10 ...
  ---------
> 2 - 3 : Overlapping



Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/



/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const startIndex = 0;
    const endIndex = 1;

    intervals.sort((a, b) => a[startIndex] - b[startIndex])
    const mergedIntervals = [];

    let mergeStart = intervals[0][startIndex];
    let mergeEnd = intervals[0][endIndex];

    for (let i = 1; i < intervals.length; i++) {
        const subsequentInterval = intervals[i];

        if (subsequentInterval[startIndex] <= mergeEnd) {
            mergeEnd = Math.max(mergeEnd, subsequentInterval[endIndex]);
        } else {
            mergedIntervals.push([mergeStart, mergeEnd])
            mergeStart = subsequentInterval[startIndex];
            mergeEnd = subsequentInterval[endIndex];
        }
    }
    mergedIntervals.push([mergeStart, mergeEnd])
    return mergedIntervals;
};
// Test cases for Merge Intervals

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // Expected: [[1,6],[8,10],[15,18]]
console.log(merge([[1, 4], [4, 5]])); // Expected: [[1,5]]




// Lets try to do this with merge sort :
// --------------------------------------------

/*
Merge Intervals using Merge Sort (manual, no built-ins)
- First, sort intervals by start value using merge sort.
- Then, merge overlapping intervals.
*/

// Manual merge sort for intervals
function mergeSortIntervals(arr) {
    if (arr.length <= 1) return arr;
    var mid = Math.floor(arr.length / 2);

    // Copy left half
    var left = [];
    for (var i = 0; i < mid; i++) left[left.length] = arr[i];
    // Copy right half
    var right = [];
    for (var i = mid; i < arr.length; i++) right[right.length] = arr[i];

    var sortedLeft = mergeSortIntervals(left);
    var sortedRight = mergeSortIntervals(right);

    return mergeIntervals(sortedLeft, sortedRight);
}

// Merge two sorted arrays of intervals by start value
function mergeIntervals(left, right) {
    var sortedArr = [];
    var i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i][0] < right[j][0]) {
            sortedArr[sortedArr.length] = left[i];
            i++;
        } else {
            sortedArr[sortedArr.length] = right[j];
            j++;
        }
    }
    while (i < left.length) {
        sortedArr[sortedArr.length] = left[i];
        i++;
    }
    while (j < right.length) {
        sortedArr[sortedArr.length] = right[j];
        j++;
    }
    return sortedArr;
}

// Merge overlapping intervals after sorting
function mergeIntervalsProblem(intervals) {
    if (intervals.length === 0) return [];

    // Step 1: Sort intervals by start value using manual merge sort
    var sorted = mergeSortIntervals(intervals);

    // Step 2: Merge overlapping intervals
    var merged = [];
    var mergeStart = sorted[0][0];
    var mergeEnd = sorted[0][1];

    for (var i = 1; i < sorted.length; i++) {
        var currStart = sorted[i][0];
        var currEnd = sorted[i][1];

        if (currStart <= mergeEnd) {
            // Overlapping, extend the end
            if (currEnd > mergeEnd) mergeEnd = currEnd;
        } else {
            // No overlap, push previous interval
            merged[merged.length] = [mergeStart, mergeEnd];
            mergeStart = currStart;
            mergeEnd = currEnd;
        }
    }
    // Push the last interval
    merged[merged.length] = [mergeStart, mergeEnd];
    return merged;
}

// Test cases
console.log(mergeIntervalsProblem([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1,6],[8,10],[15,18]]
console.log(mergeIntervalsProblem([[1, 4], [4, 5]])); // [[1,5]]
