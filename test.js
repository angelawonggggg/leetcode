const mySet = new Set();

mySet.add(1111);
mySet.add(2222);
mySet.delete(1111)

console.log(mySet.has(1111))

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// // let newNode = new Node("Angela");
// // console.log(newNode)

// class LinkedList { 
//     constructor() {
//         this.head = null;
//         this.tail = null; 
//         this.length = 0;
//     }

//     insert(value) {
//         this.length++;
//         let newNode = new Node(value);

//         if(this.tail) {
//             this.tail.next = newNode;   // insert it to the last
//             this.tail = newNode;
//             return newNode;
//         }

//         this.head = this.tail = newNode; //When the value of tail is null, it means that the linked list is still empty, so you need to assign the newNode object to the head and tail pointers.
//     };

//     remove() {
//         if(this.tail) {
//             this.length--;
//         const tailNode = this.tail;
        

//         let currentNode = this.head;

//         while(currentNode != tailNode) {  // the list is not empty
//             currentNode = currentNode.next;
//         }

//         const beforeTail = currentNode;
//         this.tail = beforeTail;
//         this.tail.next = null;

//         return tailNode;
//         }

//         return undefined
        


//     }

//     insertHead(value) {
//         this.length++;
//         let newNode = new Node(value);

//         if(this.head) {
//             newNode.next = this.head;
//             this.head = newNode; 
//             return newNode;
//         }

//         this.head = this.tail = newNode;
//         return newNode;
//     }

//     removeHead() {
//        if(this.head) {
//            this.length--;
//            const removedNode = this.head;
//            this.head = this.head.next
//        }
//        return undefined    // why return undefined?
//     }

//     insertIndex(value, index) {
//         // to make sure that the value of the index parameter is smaller than the length value of the linked list
//         if(index >= this.length) {
//             throw new Error("Insert index out of bounds")
//         }

//         if(index === 0) {
//             return this.insertHead(value) // call the insertHead method
//         }

//         let previousNode = null;
//         let currentNode = this.head;
//         for(let i=0; i< index; i++) {
//             previousNode = currentNode;
//             currentNode = currentNode.next;
//         }

//         const newNode = new Node(value);
//         this.length++;

//         return newNode;

//     }

//     print() {
//         let current = this.head;  // start from head
//         while(current) {
//             console.log(current.value);
//             current = current.next 
//         }
//     }
// }

// const linkedList1 = new LinkedList()


// linkedList1.insert("Angela")
// linkedList1.insert("Wong")
// linkedList1.print();
// linkedList1.remove("Wong")
// linkedList1.print()






