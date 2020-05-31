class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}

let swap = (arr,idx1,idx2)=>[arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]]

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

let q = new PriorityQueue()
q.enqueue("Loeuf", 0)
q.enqueue("Torse", 1)
q.enqueue("Doef", -1)
q