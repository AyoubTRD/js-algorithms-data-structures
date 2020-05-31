function hash(key, num=101) {
    let total = 0
    const PRIME = 53
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        total = (total * PRIME + key.charCodeAt(i)) % num
    }
    return total
}

class HashMap {
    constructor() {
        this.keymap = []
    }

    set(key, value) {
        const hashed = hash(key)
        if (!this.keymap[hashed]) this.keymap[hashed] = [] 
        const container = this.keymap[hashed].find(arr => arr[0] === key)
        if (container) container[1] = value
        else this.keymap[hashed].push([key, value])    
        return value
    }

    get(key) {
        const hashed = hash(key)
        if (!this.keymap[hashed]) return
        const container = this.keymap[hashed].find(arr => arr[0] === key)
        return container && container[1]
    }

    remove(key) {
        const hashed = hash(key)
        this.keymap[hashed] = this.keymap[hashed].filter(arr => arr[0] !== key)
    }

    keys() {
        keys = []
        for (const arr of this.keymap) {
            if (!arr) continue
            for (const innerArr of arr) {
                keys.push(innerArr[0])
            }
        }
        return keys
    }

    values() {
        values = []
        for (const arr of this.keymap) {
            if (!arr) continue
            for (const innerArr of arr) {
                values.push(innerArr[1])
            }
        }
        return values
    }
}
