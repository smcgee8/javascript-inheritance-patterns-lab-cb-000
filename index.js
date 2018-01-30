function Point(x,y) {
  this.x = x;
  this.y = y;
}

function Shape() {
  this.addToPlane = (x,y) => {
    this.position = new Point(x,y)
  }
  this.move = (x,y) => {
    this.position.x = x;
    this.position.y = y;
  }
}
