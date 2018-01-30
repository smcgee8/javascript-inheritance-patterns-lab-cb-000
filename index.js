function Point(x,y) {
  this.x = x;
  this.y = y;
  this.toString = function() {
    return `${this.x}, ${this.y}`
  }
}

function Shape() {
  this.addToPlane = function(x,y) {
    this.position = new Point(x,y);
  }
  this.move = function(x,y) {
    this.position.x = x;
    this.position.y = y;
  }
}
