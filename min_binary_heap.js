let swap = (arr,idx1,idx2)=>[arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]]

class MinBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(value) {
        this.values.push(value)
        let index = this.values.length - 1
        while (this.values[index] < this.values[Math.floor((index - 1) / 2)] && index > 0) {
            swap(this.values, index, Math.floor((index - 1) / 2))
            index = Math.floor((index - 1) / 2)
        }
        return value
    }

    extractMin() {
        if (!this.values.length)
            return null
        swap(this.values, 0, this.values.length - 1)
        const value = this.values.pop()
        let index = 0

        while ((index * 2 + 1) < this.values.length && this.values[index] > this.values[index * 2 + 1] || this.values[index] > this.values[index * 2 + 2]) {

            if ((index * 2 + 2) < this.values.length && this.values[index * 2 + 2] < this.values[index * 2 + 1]) {

                swap(this.values, index * 2 + 2, index)
                index = index * 2 + 2
                continue
            }
            swap(this.values, index * 2 + 1, index)
            index = index * 2 + 1
        }

        return value
    }
}
