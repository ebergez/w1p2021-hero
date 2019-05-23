class GoodService {
  constructor() {
    this.count = false;
  }
  gitgood() {
    this.count = true;
  }
  value() {
    return this.count;
  }
}

module.exports = new GoodService();