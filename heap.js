class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert(value){
        this.values.push(value);
        let ind = this.values.length-1;
        let parentInd = Math.floor((ind-1)/2);
        let parent = this.values[parentInd];
        
        while (value > parent) {
            
            let temp = this.values[ind];
            this.values[ind]= this.values[parentInd];
            this.values[parentInd]=temp;
            ind = parentInd;
            parentInd = Math.floor((ind-1)/2);
            parent = this.values[parentInd];
        }
        console.log(value, 'parent: ', parent)
    }

    removeMax() {
        let firstValue = this.values[0];
        this.values[0]=this.values[this.values.length-1];
        this.values.pop();
        this.bubbleDown();
        console.log('Removed max: ', this.values)
        return firstValue;
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

let mbh = new MaxBinaryHeap;
mbh.insert(33);
mbh.insert(12);
mbh.insert(27);
mbh.insert(18);
mbh.insert(41);
mbh.insert(39);
console.log(mbh.values);

console.log(mbh.removeMax());
