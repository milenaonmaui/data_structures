class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left=null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    getMax(){
        let max = this.root;
        while (true) {
            if (max.right === null){
                return max
            }
            max = max.right;
        }
    }

    find(value) {
        
        let currNode = this.root;
        while(true) {
            if (currNode.value === value) {
                return currNode;
            }
            if (currNode.value > value){
                if (currNode.left === null) {
                    return null;
                } else {
                    currNode = currNode.left;
                }
            }
            if (currNode.value < value){
                if (currNode.right === null) {
                    return null;
                } else {
                    currNode = currNode.right;
                }
            }
        }
    }

    traverse() {
        let queue =[];
        let visited = [];
        let currNode = this.root;
        queue.push(currNode);
        while(queue.length >=1) {
            currNode = queue.shift();
            if (currNode.left) {
                queue.push(currNode.left)
            } 
            if (currNode.right) {
                queue.push(currNode.right)
            }
            visited.push(currNode.value)
           
        }
        return visited
    }

    insert(value) {
        var newNode = new Node(value);
        if (this.root === null ) {
            this.root = newNode;
            return this;
            //returns the tree
        } else {
            let currNode = this.root;
        
            while (true) {
                if (value > currNode.value) {
                   
                    if (currNode.right === null) {
                        currNode.right = newNode;
                        return this;
                    } else {
                        currNode = currNode.right;
                    
                    }
                } else if (value <= currNode.value) {
                    if (currNode.left === null) {
                        currNode.left = newNode;
                        return this;
                    } else {
                        currNode = currNode.left;
                        
                    }
                }
            }
        }
    }

    
}

//      10
//    5      13
//  2   7  19   20
var bst = new BinarySearchTree();
bst.insert(10)
bst.insert(13)
bst.insert(5)
bst.insert(2);
bst.insert(7);
bst.insert(19);
bst.insert(20);
console.log(bst.traverse())