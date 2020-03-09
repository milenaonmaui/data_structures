class PriorityQueue {
    constructor(){
        this.values = [];
    }

    insert(node) {
        this.values.push(node);
        let ind = this.values.length-1;
        if (ind === 0) return; 
        this.orderSibling(ind)      
        let parentInd = Math.floor((ind-1)/2);
        let parent = this.values[parentInd];
    
        while (node.priority < parent.priority) {
           
            let temp = this.values[ind];
            this.values[ind]= this.values[parentInd];
            this.values[parentInd]=temp;
            //swap children if not in order
            this.orderSibling(ind)
            ind = parentInd; 
            if (ind === 0) break;
            parentInd = Math.floor((ind-1)/2);
            parent = this.values[parentInd];
            
        }
  
        
    }

    removeMax() {
        let firstValue = this.values[0];
        this.values[0]=this.values[this.values.length-1];
        this.values.pop();
        this.bubbleDown();
        console.log('Removed max: ', this.values)
        return firstValue;
    }

    orderSibling(ind){
        if (ind%2 === 0 && ind>0) {
            console.log("Node has a sibling")
            if (this.values[ind].priority < this.values[ind-1].priority) {
                console.log("need to swap ", this.values[ind].priority, " with ", this.values[ind-1].priority )
                let temp;
                temp = this.values[ind];
                this.values[ind] = this.values[ind-1];
                this.values[ind-1] = temp;              
            }
        }
    }
    bubbleDown(){
        let idx = 0;
        
        let childIdx;
        while ((2*idx + 2) <=this.values.length-1) {
            let element = this.values[idx];
            if (this.values[2*idx+1] > this.values[2*idx+2]) {
                childIdx = 2*idx + 1;
            } else {
                childIdx = 2*idx + 2;
            }
            if (element > this.values[childIdx]) break;
            this.values[idx] = this.values[childIdx]
            this.values[childIdx] = element;
            idx = childIdx;
        }
        return this.values;

       
    }
}

class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

let task1 = new Node("pay bill", 2);
let task2 = new Node("study", 4);
let task3 = new Node("groceries", 3);
let task4 = new Node("cancel", 1);
let taskList = new PriorityQueue()
taskList.insert(task1);
taskList.insert(task2);
taskList.insert(task3);
taskList.insert(task4);
console.log(taskList.values)