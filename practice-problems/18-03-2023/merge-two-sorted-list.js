// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  let tempNode = new ListNode();

  let mergedList = tempNode;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      mergedList.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      mergedList.next = new ListNode(list2.val);
      list2 = list2.next;
    }

    mergedList = mergedList.next;
  }

  mergedList.next = list1 || list2;

  return tempNode.next;
};

console.log(
  mergeTwoLists(
    {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null,
        },
      },
    },
    {
      val: 1,
      next: {
        val: 3,
        next: {
          val: 4,
          next: null,
        },
      },
    }
  )
);
