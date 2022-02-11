class CustomMap {
    mp
    constructor() {
        this.mp = {}
    }
    get(key) {
        return this.mp[key]
    }
    set(key, val) {
        this.mp[key] = val
    }
    delete(key) {
        delete this.mp[key]
    }
    length() {
        return Object.keys(this.mp).length
    }
    keys() {
        return Object.keys(this.mp)
    }
}


let a = new CustomMap()
const key = { a: 6 }
const key1 = { a: 6 }


console.log(key)