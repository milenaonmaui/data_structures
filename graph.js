class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(name){
        this.adjacencyList[name]=[]
    }

    addEdge(vertex1, vertex2){
        if (this.adjacencyList[vertex1] === undefined ||this.adjacencyList[vertex1] === undefined) return;
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2){
        console.log("Remove edge ", vertex1, vertex2)
        if (this.adjacencyList[vertex1] === undefined ||this.adjacencyList[vertex1] === undefined) return;
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(el => el !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(el => el !== vertex1);
    }

    removeVertex(vertex){
        let nodesToRemove = this.adjacencyList[vertex]
        for (let v in nodesToRemove){
            this.removeEdge(vertex, nodesToRemove[v])
        }
        delete this.adjacencyList[vertex]
    }

    depthSearch(vertex){
        if (this.adjacencyList[vertex]===[]) return;
        let visited=[];
        let result = {};
        this.dfs(vertex, visited, result);
        
        return visited;          
    }

    dfs(vertex, visited, result){
        result[vertex]=true;
        visited.push(vertex);
        if (this.notVisited(vertex, result) ===[]) return;
        while (this.notVisited(vertex, result).length>0) {
            let nextNode=this.notVisited(vertex, result)[0]
            this.dfs(nextNode, visited, result);
            
        }
    };
    notVisited(vertex, result){
        return this.adjacencyList[vertex].filter(v => !result[v])
    }

    depthSearchIterative(start){
        let s = [];
        let visited = {};
        let result = [];
        s.push(start)
        while (s.length>0){
            let vertex = s.pop();
            if (!visited[vertex]){
                visited[vertex] = true;
                result.push(vertex);
                this.adjacencyList[vertex].forEach(
                    el => s.push(el)
                )
            }

        }
        return result;
    }

    breadthSearch(start){
        let result = [];
        let visited = {};
        
        let queue=[];
        queue.push(start);
        while (queue.length >0) {
            let vertex = queue.shift();
            if (!visited[vertex]){
                result.push(vertex);
                visited[vertex]=true;
            }
            this.adjacencyList[vertex].forEach(
                el => queue.push(el)
                
            )
           
        } 
        return result;
    }
}

let gr = new Graph();
gr.addVertex("A");
gr.addVertex("B");
gr.addVertex("C");
gr.addVertex("D");
gr.addVertex("E");
gr.addVertex("F");
gr.addEdge("A", "B");
gr.addEdge("A", "E")
gr.addEdge("B", "C")
gr.addEdge("B", "D")
gr.addEdge("C", "D")
gr.addEdge("D", "E")
gr.addEdge("D", "F")
gr.addEdge("E", "F")
console.log(gr.adjacencyList);
let result = {"B": true, "C":true}

console.log(gr.depthSearch("A"))
console.log("Iterative search ",gr.depthSearchIterative("A"))
console.log("Breadth search ",gr.breadthSearch("A"))