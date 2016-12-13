var setAge = function(age)
{
  this.age = age;
};

var person = new Object();
person.age = 30;
person.setAge = setAge;

var data = new Object();
data.age = setAge;

var height = function(h)
{
  this.h = h;
};

var width = function(w)
{
  this.w = w;
};

var dimension = new Object();
dimension.setHeight = height(h);
dimension.setWidth = width(w);

// ------------------------------
var parameter = function(par)
{
  this.parameter = par * 4;
};

var area = function(ar)
{
  this.area = ar * ar;
};

var square = new Object();
square.parameter = 10;
square.area = 20;

square.par = parameter;
square.ar = area;

//-------------------------------
var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
var setHeight = function (newHeight) {
  this.height = newHeight * 4;
};

var setWidth = function (newWidth) {
  this.width = newWidth * 4;
};

// here change the width to 8 and height to 6 using our new methods
rectangle.setHeight = setHeight;
rectangle.setWidth =  setWidth;
var a = rectangle.setHeight(6);
 var b = rectangle.setWidth(8);
