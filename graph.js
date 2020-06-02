class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.start = null
        this.end = null
        this.length = 0
    }

    enqueue(value) {
        const node = new Node(value)
        if (!this.length) this.start = node
        if (this.end) this.end.next = node
        this.end = node
        return ++this.length
    }

    dequeue() {
        if (!this.length) return
        const node = this.start
        this.start = node.next
        if (!this.start) this.end = null
        this.length--
        return node.value
    }
}

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (this.adjacencyList[vertex]) return
        this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2) {
        if (vertex1 === vertex2) return
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2] || this.adjacencyList[vertex1].includes(vertex2)) return
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        if (vertex1 === vertex2) return
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        )
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        )
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return
        for (let v of this.adjacencyList[vertex]) {
            this.removeEdge(v, vertex)
        }
        delete this.adjacencyList[vertex]
    }

    depthFirstTraverse(start) {
        if (!this.adjacencyList[start]) return []
        const visited = {}
        
        const helper = vertex => {
            visited[vertex] = true
            for (const v of this.adjacencyList[vertex]) {
                if (!visited[v]) helper(v)
            }
        }
        helper(start)
        return Object.keys(visited)
    }

    breadthFirstTraverse(start) {
        if (!this.adjacencyList[start]) return []
        const visited = {}
        const queue = new Queue()
        queue.enqueue(start)

        const helper = () => {
            if (!queue.length) return
            const vertex = queue.dequeue()
            visited[vertex] = true
            for (const v of this.adjacencyList[vertex]) {
                if (!visited[v]) queue.enqueue(v)
            }
            helper()
        }
        helper()
        return Object.keys(visited)
    }
}

let g = new Graph()
g.addVertex("red")
g.addVertex("blue")
g.addVertex("green")
g.addVertex("cyan")
g.addVertex("purple")
g.addVertex("yellow")

g.addEdge("cyan", "blue")
g.addEdge("cyan", "green")


g.depthFirstTraverse("blue")
g.breadthFirstTraverse("blue")