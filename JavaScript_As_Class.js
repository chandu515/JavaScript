function Person(name, age, dob)
{
  this.name = name;
  this.age = age;
  this.dob = dob;

  this.health = function()
  {
    console.log("I am fine");
  };
};

var user = new Person("John Smith", 30, "01-01-1990");

user.health();

// ----------------------------------------
/* var data = function(age){
console.log(data);
};

function health(age){
  console.log(age);
};

health(10);
data(10); */
