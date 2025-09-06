// Linked List Cycle

/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.



Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).



Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.



Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.



Topics: Hash Table, Linked List, Two Pointers
*/



/**
 * Approach:
 * - We are given the head of a singly linked list. (This is where the linked list comes into the picture: we traverse the list using the .next pointers starting from head.)
 * - We need to check if there is a cycle (a node points back to a previous node).
 *
 * There are two main ways to solve this:
 *
 * 1. Hash Table (HashSet) Approach:
 *    - Traverse the linked list node by node using the .next pointers.
 *    - For each node, store its reference (address) in a hashtable (object).
 *    - If you see the same node again, there is a cycle (return true).
 *    - If you reach the end (null), there is no cycle (return false).
 *    - This uses extra space for the hashtable.
 *
 * 2. Two Pointers (Floyd's Tortoise and Hare) Approach:
 *    - Use two pointers: slow and fast, both starting at the head of the linked list.
 *    - Move slow by 1 step, fast by 2 steps, always following the .next pointers.
 *    - If there is a cycle, fast and slow will eventually meet at the same node.
 *    - If fast reaches the end (null), there is no cycle.
 *    - This uses no extra space.
 *
 * We will not use any built-in JS methods or Set.
 * For the hashtable, use a plain object and store node references as keys.
 * For two pointers, just use variables and follow the linked list structure.
*/


function createLinkedList(arr, pos) {
    var nodes = [];
    for (var i = 0; i < arr.length; i++) {
        nodes[i] = { val: arr[i], next: null };
    }
    for (var i = 0; i < arr.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    if (pos >= 0) {
        nodes[arr.length - 1].next = nodes[pos]; // create cycle
    }
    return nodes[0] || null;
}
var head = createLinkedList([3, 2, 0, -4], 1);


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
*/

// hash table ::
/**
 * @param {ListNode} head
 * @return {boolean}
*/
var hasCycleHash = function (head) {
    var current = head;
    while (current !== null) {
        if (current.visited) { // If node already seen, cycle exists
            return true;
        }
        current.visited = true; // Mark node as visited
        current = current.next;  // Move to next node
    }
    return false; // No cycle found
};
console.log(hasCycleHash(head));


// Two Pointers ::
/**
 * @param {ListNode} head
 * @return {boolean}
*/
var hasCycleTwo = function (head) {
    var slow = head;
    var fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;         // Move slow by 1
        fast = fast.next.next;    // Move fast by 2
        if (slow === fast) {      // If they meet, cycle exists
            return true;
        }
    }
    return false; // No cycle found
};
console.log(hasCycleTwo(head));
