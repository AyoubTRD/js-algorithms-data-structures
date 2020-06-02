const swap = (arr, i1, i2) => [arr[i1], arr[i2]] = [arr[i2], arr[i1]]

class Node {
    constructor(value, priority=null) {
        this.value = value
        this.next = null
        this.priority = priority
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
        if (this.end) this.end.next = node
        this.end = node
        this.start = this.start || node
        return ++this.length
    }

    dequeue() {
        const node = this.start
        this.start = node && node.next
        if (!this.start) this.end = null
        this.length = Math.max(0, --this.length)
        return node && node.value
    }
}

class PriorityQueue {
    constructor() {
        this.nodes = []
    }

    enqueue(value, priority=0) {
        const node = new Node(value, priority)
        this.nodes.push(node)
        if (this.nodes.length === 1) return value
        let index = this.nodes.length - 1
        while (this.nodes[index].priority < this.nodes[Math.floor((index - 1) / 2)].priority && index > 0) {
            swap(this.nodes, index, Math.floor((index - 1) / 2))
            index = Math.floor((index - 1) / 2)
        }
        return value
    }

    dequeue() {
        if (!this.nodes.length)
            return null
        swap(this.nodes, 0, this.nodes.length - 1)
        const { value } = this.nodes.pop()
        let index = 0

        while ((index * 2 + 1) < this.nodes.length && this.nodes[index].priority > this.nodes[index * 2 + 1].priority || this.nodes[index] > this.nodes[index * 2 + 2]) {

            if ((index * 2 + 2) < this.nodes.length && this.nodes[index * 2 + 2].priority < this.nodes[index * 2 + 1].priority) {

                swap(this.nodes, index * 2 + 2, index)
                index = index * 2 + 2
                continue
            }
            swap(this.nodes, index * 2 + 1, index)
            index = index * 2 + 1
        }

        return value
    }
}

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = this.adjacencyList[vertex] || []
    }

    addEdge(vertex1, vertex2, weight) {
        if (vertex1 === vertex2) return
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2] || this.adjacencyList[vertex1].includes(vertex2)) return
        this.adjacencyList[vertex1].push({vertex: vertex2, weight})
        this.adjacencyList[vertex2].push({vertex: vertex1, weight})
    }

    removeEdge(vertex1, vertex2) {
        if (vertex1 === vertex2) return
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v.vertex !== vertex2
        )
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v.vertex !== vertex1
        )
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return
        for (let v of this.adjacencyList[vertex]) {
            this.removeEdge(v.vertex, vertex)
        }
        delete this.adjacencyList[vertex]
    }

    depthFirstTraverse(start) {
        if (!this.adjacencyList[start]) return []
        const visited = {}
        
        const helper = vertex => {
            visited[vertex] = true
            for (const v of this.adjacencyList[vertex]) {
                if (!visited[v.vertex]) helper(v.vertex)
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
            const vertex = queue.dequeue()
            if (!vertex) return
            visited[vertex] = true
            for (let connection of this.adjacencyList[vertex]) {
                if (!visited[connection.vertex]) queue.enqueue(connection.vertex)
            }
            helper()
        }

        helper()
        return Object.keys(visited)
    }
}

let g = new WeightedGraph()

g.addVertex("Loeuf")
g.addVertex("Torse")
g.addVertex("Hand")
g.addEdge("Loeuf", "Torse", "Strong")
g.addEdge("Loeuf", "Hand", "Super Strong")

g.adjacencyList