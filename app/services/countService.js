class CountService {
  constructor() {
    this.count = localStorage.getItem('count') 
    ? localStorage.getItem('count')
    : 0
  }
  increment() {
    localStorage.setItem('count', this.count++);
  }
  value() {
    return this.count
  }
}

module.exports = new CountService 