// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

// 示例：

// 给定一个链表: 1->2->3->4->5, 和 n = 2.

// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：

// 给定的 n 保证是有效的。

// 进阶：

// 你能尝试使用一趟扫描实现吗？

// 思路：快指针fast先走n步，快指针fast慢指针slow再一起走，走到null，此时的i就是要删除的节点！



var removeNthFromEnd = function(head, n) {
  let preHead = new ListNode(0)
  preHead.next = head
  let fast = preHead
  let slow = preHead
  while(n--){
    fast = fast.next
  }
  while(fast && fast.next){
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return preHead.next
};