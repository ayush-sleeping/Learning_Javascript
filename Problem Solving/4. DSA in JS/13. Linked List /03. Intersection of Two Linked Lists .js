/*
Given the heads of two singly linked - lists headA and headB, return the node at which the two lists intersect.If the two linked lists have no intersection at all, return null.
For example, the following two linked lists begin to intersect at node c1:
The test cases are generated such that there are no cycles anywhere in the entire linked structure.
Note that the linked lists must retain their original structure after the function returns.

Custom Judge:
The inputs to the judge are given as follows (your program is not given these inputs):

- intersectVal - The value of the node where the intersection occurs.This is 0 if there is no intersected node.
- listA - The first linked list.
- listB - The second linked list.
- skipA - The number of nodes to skip ahead in listA(starting from the head) to get to the intersected node.
- skipB - The number of nodes to skip ahead in listB(starting from the head) to get to the intersected node.

The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program.If you correctly return the intersected node, then your solution will be accepted.

Example 1:
Input: intersectVal = 8, listA = [4, 1, 8, 4, 5], listB = [5, 6, 1, 8, 4, 5], skipA = 2, skipB = 3
Output: Intersected at '8'
Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [4, 1, 8, 4, 5]. From the head of B, it reads as [5, 6, 1, 8, 4, 5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
- Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.


Example 2:
Input: intersectVal = 2, listA = [1, 9, 1, 2, 4], listB = [3, 2, 4], skipA = 3, skipB = 1
Output: Intersected at '2'
Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [1, 9, 1, 2, 4]. From the head of B, it reads as [3, 2, 4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.


Example 3:
Input: intersectVal = 0, listA = [2, 6, 4], listB = [1, 5], skipA = 3, skipB = 2
Output: No intersection
Explanation: From the head of A, it reads as [2, 6, 4]. From the head of B, it reads as [1, 5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.

Topics: Hash Table, Linked List, Two Pointers
*/


/*
Approach:
- You are given the heads of two singly linked lists, headA and headB.
- The lists may or may not intersect (share some nodes at the end).
- You need to return the node where the intersection starts (the first common node by reference, not by value).
- If there is no intersection, return null.

Why is this a Linked List, Hash Table, and Two Pointers problem?
- Linked List: You must traverse and compare nodes using .next pointers.
- Hash Table: One approach is to store all nodes of one list in a hashtable, then check if any node in the other list is in the hashtable.
- Two Pointers: Another approach is to use two pointers, one for each list, and move them forward. When a pointer reaches the end, move it to the head of the other list. If the lists intersect, the pointers will meet at the intersection node after at most 2 passes.

Steps for both approaches:
1. Hash Table:
   - Traverse list A, store each node reference in a hashtable.
   - Traverse list B, for each node, check if it is in the hashtable.
   - If found, return that node. If not, return null.

2. Two Pointers:
   - Set pointerA to headA, pointerB to headB.
   - Move both pointers forward one step at a time.
   - When a pointer reaches the end, move it to the head of the other list.
   - If the lists intersect, the pointers will meet at the intersection node.
   - If not, both will reach null at the same time and you return null.

No built-in JS methods will be used; all logic will be manual.
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
*/


// Hash Table Approach ::
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNodeHash = function (headA, headB) {
    var visited = {};            // Create an object to store visited nodes from list A
    var currentA = headA;        // Start traversing from the head of list A
    while (currentA !== null) {
        visited[currentA] = true; // Mark the current node in A as visited (using its reference as key)
        currentA = currentA.next; // Move to the next node in list A
    }
    var currentB = headB;        // Start traversing from the head of list B
    while (currentB !== null) {
        if (visited[currentB]) { // If the current node in B is already visited (exists in visited object)
            return currentB;     // This is the intersection node, return it
        }
        currentB = currentB.next; // Move to the next node in list B
    }
    return null;                 // If no intersection is found, return null
};


// Two Pointers Approach ::
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    var pointerA = headA; // Start pointerA at the head of list A
    var pointerB = headB; // Start pointerB at the head of list B
    // If either list is empty, there is no intersection
    if (pointerA === null || pointerB === null) return null; // Return null if any list is empty

    // Move both pointers; when one reaches the end, switch to the other list's head
    while (pointerA !== pointerB) { // Loop until both pointers meet (either at intersection or at null)
        pointerA = (pointerA === null) ? headB : pointerA.next; // If pointerA reaches end, move to headB; else move to next node
        pointerB = (pointerB === null) ? headA : pointerB.next; // If pointerB reaches end, move to headA; else move to next node
    }
    // Either both are null (no intersection), or both are at the intersection node
    return pointerA; // Return the intersection node or null if no intersection
};
