export class SingleUseWeakMap {
  constructor() {
    this.map = new WeakMap()
  }

  set(key, value) {
    this.map.set(key, value)
  }

  get(key) {
    const value = this.map.get(key)
    this.map.delete(key)
    return value
  }
}
