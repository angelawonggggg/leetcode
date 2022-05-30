class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 var reverseList = function (head) {
    var prev = null, next = null;
  
    while (head != null) {
      next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
  
    head = prev;
    return head;
  };

  

// This is not linked list although leetcode accepted the solution
// var reverseList = function(head) {
//     let reversed = head.reverse();
//     return reversed
// };
