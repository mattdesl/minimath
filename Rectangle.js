var Rectangle = function(x, y, width, height) {
	this.x = x || 0;
	this.y = y || 0;
	this.width = width || 0;
	this.height = height || 0;
};

Rectangle.prototype.constructor = Rectangle;

//TODO: this is going to get removed from minimath

module.exports = Rectangle;