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
var square = new Object();
square.parameter = parameter;
square.area = area;

square.length = 10;
square.parameter = function()
{
   return this.length * 4 ;
};

var area = function(area)
{
  return this.area1;
};
