/*
Same Tree
Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:
Input: p = [1,2,1], q = [1,1,2]
Output: false
*/

// If both nodes are null, they are the same.
// If one is null and the other isn't, they are different.
// If both are not null, check if their values are the same.
// Then, check if their left children are the same AND their right children are the same.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (p === null && q === null) {
        return true; // Both trees are empty
    }
    if (p === null || q === null) {
        return false; // One tree is empty, and the other is not
    }
    if (p.val !== q.val) {
        return false; // The values of the current nodes are different
    }
    // Check the left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Example 1: [1,2,3]
let tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
let tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(tree1, tree2)); // true

// Example 2: [1,2], [1,null,2]
let tree3 = new TreeNode(1, new TreeNode(2), null);
let tree4 = new TreeNode(1, null, new TreeNode(2));
console.log(isSameTree(tree3, tree4)); // false

// Example 3: [1,2,1], [1,1,2]
let tree5 = new TreeNode(1, new TreeNode(2), new TreeNode(1));
let tree6 = new TreeNode(1, new TreeNode(1), new TreeNode(2));
console.log(isSameTree(tree5, tree6)); // false
