// linked list

let head = [1,2,3,4]

var swapPairs = function(head) {
    if(!head || !head.next) return head;   
     var first = head;
     var second = head.next; 
    
    while (first != null &&  second != null) {
        var temp = first.val;
        first.val = second.val;
        second.val = temp;

        if(second.next == null || second.next.next == null) break;
         first = second.next;
         second = second.next.next;
    }
    return head;
};

swapPairs([1,2,3,4])