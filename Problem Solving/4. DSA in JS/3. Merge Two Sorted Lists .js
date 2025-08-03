/*
If I had two sorted arrays, how would I merge them?
Look at the first element of each array
Pick the smaller one, add it to result
Move to the next element in that array
Repeat until done

 */

// or put all values in an array, sort it, then rebuild the list

// ListNode for local testing
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let allNumbers = [];

    let node1 = list1;
    while (node1 !== null) {
        allNumbers.push(node1.val);
        node1 = node1.next;
    }

    let node2 = list2;
    while (node2 !== null) {
        allNumbers.push(node2.val);
        node2 = node2.next;
    }

    if (allNumbers.length === 0) {
        return null;
    }

    allNumbers.sort((a, b) => a - b);

    let firstNode = new ListNode(allNumbers[0]);
    let currentNode = firstNode;
    for (let i = 1; i < allNumbers.length; i++) {
        let newNode = new ListNode(allNumbers[i]);
        currentNode.next = newNode;
        currentNode = newNode;
    }
    return firstNode;
};

// function to display linked list as array
function printList(head) {
    let result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Test linked lists
// list1: 1 -> 2 -> 4
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

// list2: 1 -> 3 -> 4
const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

const result = mergeTwoLists(list1, list2);
console.log("Output:", printList(result));
