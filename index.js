function Point(x,y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ")";
}

function Shape() {}

Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y);
}

Shape.prototype.move = function(x,y) {
  this.position.x = x;
  this.position.y = y;
}

function Circle(radius) {
  Shape.call(this)
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
  return this.radius * this.radius * Math.PI;
}

Circle.prototype.circumference = function() {
  return 2 * this.radius * Math.PI;
}

Circle.prototype.diameter = function() {
  return 2 * this.radius;
}

function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.numberOfSides = function() {
  return this.sides.length;
}

Polygon.prototype.perimeter = function() {

}
