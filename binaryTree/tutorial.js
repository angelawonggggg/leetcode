class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        // root 
        this.root = null;  //it means we have no root node now
    }

    // helper method
    insert(data) {
        let newNode = new Node(data)

        if(this.root === null) {   // if we dont have a root node, let the newly created node be the root
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode);   // find the correct position in the tree and add the node
        }
    }
    // Method to insert node in a tree
    insertNode(node, newNode) {
        if(newNode.data < node.data) {     // 數值細啲擺左邊
            if(node.left === null) {  //如果粒node的左邊有位而且value細啲，就insert去左邊
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)  //if left is occupied then recur until node.left === null is found
            }
        } else {
            if(node.right === null ) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    
    remove(data) {
        this.root = this.removeNode(this.root, data);
    } 

    removeNode(node, key) {
        if(node === null) { // if the root is null then tree is empty
            return null
        } else if (key < node.data) {  //the key is on the left 
            node.left =  this.removeNode(node.left, key)  // pointer point to the left
            return node
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key)
            return node 
        } else {
            if(node.left === null && node.right === null){  // it is a leaf node
                node = null;
                return node;
            }

            if(node.left === null) {
                node = node.right;   
                return node
            } else if(node.right === null) {
                node = node.left
            }

            // Deleting node with 2 children 

            let aux = this.findMinNode(node.right);
            node.data = aux.data    //填翻右邊的data入去將被remove的node data
            node.right = this.removeNode(node.right, aux.data)
            return node

        }
        
    }

    // // helper functions 
    findMinNode() {}
}

const myBinarySearchTree = new BinarySearchTree();

myBinarySearchTree.insert(10)
console.log(myBinarySearchTree)